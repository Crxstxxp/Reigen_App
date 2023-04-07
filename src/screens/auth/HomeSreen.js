import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";
import TempContainer from "../../components/TempContainer";
import HumeContainer from "../../components/HumeContainer";

const HomeSreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  return (
    <View style={GeneralStyles.container}>
      <TempContainer/>
      <Text style={GeneralStyles.subTitle}>Ultima temperatura registrada </Text>
      <TouchableOpacity
        style={GeneralStyles.infoBoton}
        onPress={() => navigation.navigate("TempScreen")}
      >
        <Text style={{ fontSize: 20, marginTop: 11, color: "#fff" }}>
          {" "}
          Mas informacion{" "}
        </Text>
      </TouchableOpacity>
      <HumeContainer />
      <Text style={GeneralStyles.subTitle}>Ultima temperatura registrada </Text>
      <TouchableOpacity
        style={GeneralStyles.infoBoton}
        onPress={() => navigation.navigate("HumeScreen")}
      >
        <Text style={{ fontSize: 20, marginTop: 11, color: "#fff" }}>
          {" "}
          Mas informacion{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSreen;
