import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { GeneralStyles } from "../../theme/Styles";
import { TempStyles } from "../../theme/Styles";
import TempContainer from "../../components/TempContainer";
import TempList from "../../components/TempList";
import { getData } from '../../API/API'

const Temp = () => {
  return (
    <View style={GeneralStyles.container}>
      <TempContainer />
      <Text style={TempStyles.TempSubTitle}> Ultima semana </Text>
      <TempList />
    </View>
  );
};

export default Temp;
