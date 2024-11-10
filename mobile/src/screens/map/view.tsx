import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { BgCleanContainer, MainContainer } from "../../containers";
import { CustomButtonUp } from "../../custom";
import { colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

export const MapViewScreen = () => {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permissão de acesso à localização foi negada.");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);

            // Obtendo o endereço detalhado
            let [detailedAddress] = await Location.reverseGeocodeAsync(currentLocation.coords);
            if (detailedAddress) {
                setAddress(
                    `${detailedAddress.street}, ${detailedAddress.subregion}, ${detailedAddress.region} - ${detailedAddress.postalCode}, ${detailedAddress.country}`
                );
            }
        })();
    }, []);

    return (
        <BgCleanContainer>
            <MainContainer>
                <View style={styles.header}>
                    <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                    <Text style={styles.headerTitle}>Find Location</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
                    <View style={styles.mapContainer}>
                        {location ? (
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: location.latitude,
                                        longitude: location.longitude,
                                    }}
                                    title="Minha Localização"
                                    description="Você está aqui"
                                />
                                {/* Círculo laranja com raio de 200 metros */}
                                <Circle
                                    center={{
                                        latitude: location.latitude,
                                        longitude: location.longitude,
                                    }}
                                    radius={200}
                                    strokeWidth={1}
                                    strokeColor="#FE724C"
                                    fillColor="#fe734c32"
                                />
                            </MapView>
                        ) : (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size="large" color="#FE724C" />
                                <Text style={styles.loadingText}>{errorMsg || "Obtendo localização..."}</Text>
                            </View>
                        )}
                    </View>
                    {address ? (
                        <View style={styles.locationDetailsContainer}>
                            <Text style={styles.locationLabel}>Endereço Atual</Text>
                            <Text style={styles.addressText}>{address}</Text>
                        </View>
                    ) : location && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="small" color="#FE724C" />
                            <Text style={styles.loadingText}>Buscando detalhes do endereço...</Text>
                        </View>
                    )}
                </ScrollView>
            </MainContainer>
        </BgCleanContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        color: colors.black,
    },
    contentContainer: {
        padding: 10,
    },
    mapContainer: {
        height: height * 0.6, 
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
        position: 'relative', 
    },
    map: {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    },
    loadingContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    loadingText: {
        fontSize: 18,
        color: "#FE724C",
        textAlign: "center",
        marginTop: 12,
        fontFamily: "Roboto",
    },
    locationDetailsContainer: {
        backgroundColor: "#FE724C",
        padding: 18,
        borderRadius: 18,
        marginTop: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    locationLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 8,
        fontFamily: "Roboto",
    },
    addressText: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Roboto",
    },
    btn: {
        width: 20,
    },
});
