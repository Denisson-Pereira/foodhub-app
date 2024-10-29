import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODHUB_USER } from "../services/loginService";

type FoodHubProps = {
    user: IUser;
    setUser(user: IUser): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<FoodHubProps>({} as FoodHubProps);

export const FoodhubProovider: React.FC<Props> = ({children}: Props) => {
    const [user, setUser] = useState<IUser>({} as IUser);

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

    const values = { user, setUser }

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