import { View, Text, FlatList } from "react-native";
import React from "react";
interface MyItem {
  id: number;
  names: String;
}
const ArrayOfObject = () => {
  const location:MyItem[]= [
    { id: 1, names: "London" },
    { id: 2, names: "Paris" },
    { id: 3, names: "New York" },
    { id: 4, names: "W DC" },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={location}
        renderItem={({item})=><View>{item.names}</View>}
      />
    </View>
  );
};

export default ArrayOfObject;
