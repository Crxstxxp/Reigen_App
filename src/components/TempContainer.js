import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TempStyles } from "../theme/Styles";
import Slider from "@react-native-community/slider";
import { getData } from "../API/API";

const TempContainer = () => {
  const [grades, setGrades] = useState([]);

  const loadGrade = async () => {
    const dato = await getData();
    const FirstTemperature = dato[1].sensors[0].temperature;
    setGrades(parseFloat((FirstTemperature)));
  };

  useEffect(() => {
    loadGrade();
  }, []);

  return (
    <View style={TempStyles.TempContainer}>
      <Text style={TempStyles.Grades}> {grades}º </Text>
      <Slider
        style={TempStyles.TempSlider}
        minimumValue={0}
        maximumValue={0.3}
        minimumTrackTintColor={"#063970"}
        maximumTrackTintColor={"red"}
        thumbTintColor={"#000"}
        value={grades/100}
        disabled={true}
      />
    </View>
  );
};

export default TempContainer;
