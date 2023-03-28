import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HumedadItem = ({ data }) => {
  return (
    <View style={styles.ItemContainer}>
      <Text style={styles.dataTitle}> Humedad: {data.sensors[0].humidity}% </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemContainer: {
    backgroundColor: "#535eac",
    color: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  dataTitle: {
    color: "#fff",
  },
});
export default HumedadItem;
