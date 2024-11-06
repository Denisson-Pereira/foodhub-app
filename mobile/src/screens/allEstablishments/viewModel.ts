import { useState } from "react";
import { IAllEstablishments } from "./model";
import { IEstablishment } from "../../models/IEstablishment";

export const useAllEstablishmentsViewModel = (): IAllEstablishments => {
    const [establishmnts, setEstabilshments] = useState<IEstablishment[]>([]);
    return {establishmnts, setEstabilshments};
}