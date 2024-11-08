import { useState } from "react";
import { ICartModelo } from "./model";

export const useCartViewModel = ():ICartModelo => {
    const [subtotal, setSubtotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(5.30);
    const [delivery, setDelivery] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);

    return {subtotal, tax, delivery, total, setSubtotal, setTax, setDelivery, setTotal };
}