import { SetStateAction } from "react";
import { IEstablishment } from "../../models/IEstablishment";

export interface IAllEstablishments {
    establishmnts: IEstablishment[]
    setEstabilshments: React.Dispatch<SetStateAction<IEstablishment[]>>
}