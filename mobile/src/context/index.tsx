import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODHUB_USER } from "../services/loginService";
import { IProduct } from "../models/IProduct";
import { IEstablishment } from "../models/IEstablishment";

export interface CartItem extends IProduct {
    cartId: string;
    quantity: number;
}

type FoodHubProps = {
    user: IUser;
    setUser(user: IUser): void;
    cart: CartItem[];
    addCart: (item: IProduct) => void;
    removeCart: (cartId: string) => void;
    incrementQuantity: (cartId: string) => void;
    decrementQuantity: (cartId: string) => void;
    quantidadeCart: string;
    favorites: IProduct[];
    toggleFavorite: (item: IProduct) => void;
    favoritesEstablishment: IEstablishment[];
    toggleFavoritesEstablishment: (item: IEstablishment) => void
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<FoodHubProps>({} as FoodHubProps);

export const FoodhubProvider: React.FC<Props> = ({ children }: Props) => {
    const [user, setUser] = useState<IUser>({} as IUser);

    const [cart, setCart] = useState<CartItem[]>([]);
    const [quantidadeCart, setQuantidadeCart] = useState<string>('');

    const [favorites, setFavorites] = useState<IProduct[]>([]);
    const [favoritesEstablishment, setFavoritesEstablishment] = useState<IEstablishment[]>([]);

    useEffect(() => {
        async function logar() {
            const userStorage = await AsyncStorage.getItem(FOODHUB_USER);
            const user: IUser = userStorage ? await JSON.parse(userStorage) : undefined;

            if (user?.id) {
                setUser(user);
                return;
            }
        }
        logar();
    }, []);

    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('@Cart');
            if (storedCart) {
                const parsedCart = JSON.parse(storedCart);
                setCart(parsedCart);
                setQuantidadeCart(parsedCart.length.toString());
            }
        }
        loadCart();
    }, []);

    const updateCartAndQuantity = async (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        setQuantidadeCart(updatedCart.length.toString());
        await AsyncStorage.setItem('@Cart', JSON.stringify(updatedCart));
    };

    const addCart = async (item: IProduct) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            updateCartAndQuantity(updatedCart);
        } else {
            const newItem: CartItem = { ...item, cartId: Date.now().toString(), quantity: 1 };
            const updatedCart = [...cart, newItem];
            updateCartAndQuantity(updatedCart);
        }
    };

    const removeCart = async (cartId: string) => {
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        updateCartAndQuantity(updatedCart);
    };

    const incrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.cartId === cartId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    const decrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.cartId === cartId && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    useEffect(() => {
        const loadFavorites = async () => {
            const storedFavorites = await AsyncStorage.getItem('@favorites');
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        };
        loadFavorites();
    }, []);

    const toggleFavorite = async (item: IProduct) => {
        let updatedFavoritesEstablishment;
        if (favorites.find(fav => fav.id === item.id)) {
            updatedFavoritesEstablishment = favorites.filter(fav => fav.id !== item.id);
        } else {
            updatedFavoritesEstablishment = [...favorites, item];
        }
        setFavorites(updatedFavoritesEstablishment);
        await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavoritesEstablishment));
    };

    useEffect(() => {
        const loadFavoritesEstablishment = async () => {
            const storedFavorites = await AsyncStorage.getItem('@favoritesEstablishment');
            if (storedFavorites) {
                setFavoritesEstablishment(JSON.parse(storedFavorites));
            }
        };
        loadFavoritesEstablishment();
    }, []);

    const toggleFavoritesEstablishment = async (item: IEstablishment) => {
        let updatedFavoritesEstablishment;
        if (favoritesEstablishment.find(fav => fav.id === item.id)) {
            updatedFavoritesEstablishment = favoritesEstablishment.filter(fav => fav.id !== item.id);
        } else {
            updatedFavoritesEstablishment = [...favoritesEstablishment, item];
        }
        setFavoritesEstablishment(updatedFavoritesEstablishment);
        await AsyncStorage.setItem('@favoritesEstablishment', JSON.stringify(updatedFavoritesEstablishment));
    };

    const values = { user, setUser, cart, addCart, quantidadeCart, removeCart, incrementQuantity, decrementQuantity, favorites, toggleFavorite, favoritesEstablishment, toggleFavoritesEstablishment }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
}

export const useFoodHubContext = () => {
    const foodConstant = useContext(Context);
    return foodConstant;
}