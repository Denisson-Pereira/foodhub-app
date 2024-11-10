import { useState } from "react";
import { IEstablishmentDetailsModel } from "./model"
import { IEstablishment } from "../../models/IEstablishment";
import { useRoute } from "@react-navigation/native";
import { EstablishmentDetailsRouteProp } from "../../types/navigationEstablishmentTypes";

export const useEstablishmentDetailsViewModel = (): IEstablishmentDetailsModel => {
    const [establishment, setEstablishment] = useState<IEstablishment | null>(null);
    const route = useRoute<EstablishmentDetailsRouteProp>();
    const { id } = route.params;

    return { establishment, id, setEstablishment };
}