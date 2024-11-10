import React from "react";
import { IEstablishment } from "../../models/IEstablishment";

export interface IEstablishmentDetailsModel {
    establishment: IEstablishment | null
    id: number
    setEstablishment: React.Dispatch<React.SetStateAction<IEstablishment | null>>
}