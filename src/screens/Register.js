import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { GeneralStyles } from "../theme/Styles";
import { SaveUser } from "../API/API";

const Register = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
  });

  const handleChange = (name, value) => setUser({ ...user, [name]: value });

  //Funcion asincrona para guardar el registro para un usuario  nuevo

  const handleSubmit = async (e) => {
    //La funcion "SaveUser" es llamada desde un archivo que maneja las peticiones a la base de datos
    await SaveUser(user)
    if (SaveUser) {
      Alert.alert(
        'Registrado exitosamente',
        'Usa el usuario y la contraseña que generaste para iniciar sesion',
        [
          {text: 'Ok',}
        ]
      )
    }
  };

  return (
    <View style={GeneralStyles.container1}>
      {/* <Text style={styles.title}> UTD </Text> */}
      <Image
        source={require("../images/Reigen.png")}
        style={{ width: 100, height: 100, marginBottom: 15 }}
      />
      <Text style={GeneralStyles.subTitle}> Registrate ! </Text>
      <TextInput
        placeholder="Nombre"
        style={GeneralStyles.Input}
        value={user.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        placeholder="Apellido"
        style={GeneralStyles.Input}
        value={user.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        placeholder="Correo electronico"
        style={GeneralStyles.Input}
        value={user.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={GeneralStyles.Input}
        value={user.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={GeneralStyles.boton} onPress={handleSubmit}>
        <Text style={{ fontSize: 20, marginTop: 11, color: "#fff" }}>
          {" "}
          Registrarme{" "}
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Register;
