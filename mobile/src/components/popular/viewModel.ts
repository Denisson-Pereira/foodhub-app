import { useState } from "react";
import { IPoupularModel } from "./model";
import { IProduct } from "../../models/IProduct";

export const usePopularViewModel = (): IPoupularModel => {
    const [popularItens, setPopularItens] = useState<IProduct[]>([]);

    return {popularItens, setPopularItens};
}