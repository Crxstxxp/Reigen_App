import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
// import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";

const HomeSreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const getStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
        // Aquí puedes hacer lo que necesites con el valor obtenido de Async Storage
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>HomeSreen</Text>
      <Text style={GeneralStyles.subTitle}>{user.lastName}</Text>

      <TouchableOpacity style={GeneralStyles.boton} onPress={getStoredValue}>
        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>
          {" "}
          Iniciar{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GeneralStyles.boton}
        onPress={async () => {
          await logout;
          navigation.dispatch(StackActions.replace("LoginStack"))
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>
          {" "}
          Cerrar sesion{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSreen;
