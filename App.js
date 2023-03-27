import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import jwtDecode from "jwt-decode";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

import Home from "./src/screens/auth/HomeSreen";
import UserDataScreen from "./src/screens/auth/UserDataScreen";
import Temp from "./src/screens/auth/Temp";
import Humedad from "./src/screens/auth/Humedad";

import AuthContextProvider from "./src/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Funciones para crear la distribucion de pantallas
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Stack que compone las pantallas login y de registro
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

//stack para crear el menu con tab navigator
const MenuTab = () => {
  return (
    <Tab.Navigator
      //initialRouteName="Home" Ruta inicial
      screenOptions={{
        tabBarActiveTintColor: "#4853a4",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          //tabBarBadge: 1 Notificaciones
        }}
      />
      <Tab.Screen
        name="TempScreen"
        component={Temp}
        options={{
          headerShown: false,
          tabBarLabel: "Temperatura",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-brake-temperature"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HumeScreen"
        component={Humedad}
        options={{
          headerShown: false,
          tabBarLabel: "Humedad",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="water" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserDataScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//Inicializacion de la aplicacion
const app = () => {
  //Funcion para verificar si hay un usuario loggeado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 < Date.now()) {
            //si encontro el token validar si aun funciona
            await AsyncStorage.removeItem("token");
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
        } else {
          //Si no hay tokens guardados en el async storage
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ headerShown: false, headerLeft: null }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default app;
