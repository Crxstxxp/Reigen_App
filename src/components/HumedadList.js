import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import HumedadItem from "./HumedadItem";
import { getData } from "../API/API";

const HumedadList = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const token = user.token
    const datos = await getData(token);
    setData(datos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const renderItem = ({ item }) => {
    return <HumedadItem data={item} />;
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  return (
    <FlatList
      style={{ marginTop: 50, width: "90%" }}
      data={data.slice(0, 8)}
      keyExtractor={(item) => item._id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default HumedadList;
