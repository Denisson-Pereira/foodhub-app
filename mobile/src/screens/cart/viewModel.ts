import { useState } from "react";
import { ICartModelo } from "./model";

export const useCartViewModel = ():ICartModelo => {
    const [subtotal, setSubtotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const [delivery, setDelivery] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const promoCode = (code: string) => {
        if(code.toLowerCase() === 'promo50') {
            setSubtotal(prev => (
                prev - (prev * 50/100)
            ));
            return true;
        } else {
            return false;
        }
    }

    return {subtotal, tax, delivery, total, setSubtotal, setTax, setDelivery, setTotal, promoCode};
}