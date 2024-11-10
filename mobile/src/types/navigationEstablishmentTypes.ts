import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Establishment: undefined;
  EstablishmentDetails: { id: number };
};

type EstablishmentDetailsRouteProp = RouteProp<RootStackParamList, 'EstablishmentDetails' >;

export { RootStackParamList, EstablishmentDetailsRouteProp };