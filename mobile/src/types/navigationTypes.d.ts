import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Products: undefined;
  ProductsDetails: { id: number };
};

type ProductsDetailsRouteProp = RouteProp<RootStackParamList, 'ProductsDetails' >;

export { RootStackParamList, ProductsDetailsRouteProp };