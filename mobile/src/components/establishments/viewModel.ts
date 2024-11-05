import { useState } from "react";
import { IEstablishmentModel } from "./model";
import { IEstablishment } from "../../models/IEstablishment";

export const useEstablishmentViewModel = (): IEstablishmentModel => {
    const [establishment, setEstablishment] = useState<IEstablishment[]>([]);

    return { establishment, setEstablishment };
}