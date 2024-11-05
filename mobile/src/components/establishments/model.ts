import { IEstablishment } from "../../models/IEstablishment";

export interface IEstablishmentModel {
    establishment: IEstablishment[]
    setEstablishment: React.Dispatch<React.SetStateAction<IEstablishment[]>>
}