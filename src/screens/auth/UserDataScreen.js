import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";
import { getUserData, updateUser } from "../../API/API";

const UserDataScreen = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const [userData, setUserData] = useState({});
  const navigation = useNavigation()

  const loadUserData = async () => {
    const id = user.id;
    const usuario = await getUserData(id);
    setUserData(usuario);
    console.log(usuario);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleChange = (name, value) =>
    setUserData({ ...userData, [name]: value });

  const handleUpdate = async () => {
    const id = user.id;
    const updatedUser = await updateUser(id, userData);
    if (updatedUser) {
      Alert.alert(
        "Datos actualizados correctamente",
        ":D",
        [
          {
            text: "Ok"
          },
        ]
      );
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={GeneralStyles.container}>
      <Text style={styles.subTitle}>Ajustes</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          placeholder="Ingresa tu nombre completo"
          autoCapitalize="words"
          editable={false}
        />

        <Text style={styles.text}>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={userData.lastName}
          placeholder="Ingresa tus apellidos"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={false}
        />

        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={styles.input}
          value={userData.email}
          onChangeText={(text) => handleChange("email", text)}
          placeholder="Ingresa tu Email"
        />

        <Text style={styles.text}>Cambie su contraseña:</Text>
        <TextInput
          style={styles.input}
          value={userData.__v}
          onChangeText={(text) => handleChange("password", text)}
          placeholder="Ingresa tu nueva contraseña"
        />

        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
          <Text style={styles.buttonText}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -100,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 5,
    marginBottom: 20,
    fontSize: 16,
    color: "#000000",
    width: 300,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
  dataContainer: {
    paddingHorizontal: 30,
    marginTop: 100,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default UserDataScreen;
