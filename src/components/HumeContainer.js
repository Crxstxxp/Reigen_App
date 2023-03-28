import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TempStyles } from "../theme/Styles";
import Slider from "@react-native-community/slider";
import { getData } from "../API/API";

const HumeContainer = () => {
  const [humedad, setHumedad] = useState([]);

  const loadHumedad = async () => {
    const dato = await getData();
    const FirstHumedity = dato[1].sensors[0].humidity;
    setHumedad(parseFloat(FirstHumedity));
  };

  useEffect(() => {
    loadHumedad()
  }, [])

 return (
   <View style={TempStyles.TempContainer}>
      <Text style={TempStyles.Grades}> {humedad}% </Text>
      <Slider
        style={TempStyles.TempSlider}
        minimumValue={0}
        maximumValue={0.3}
        minimumTrackTintColor={"#063970"}
        maximumTrackTintColor={"red"}
        thumbTintColor={"#000"}
        value={humedad/100}
        disabled={true}
      />
    </View>
  );
};

export default HumeContainer;
