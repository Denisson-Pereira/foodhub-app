import React from "react";
import { IEstablishment } from "../../models/IEstablishment";
import { IProduct } from "../../models/IProduct";

export interface IEstablishmentDetailsModel {
    establishment: IEstablishment | null
    products: IProduct[]
    id: number
    setEstablishment: React.Dispatch<React.SetStateAction<IEstablishment | null>>
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}