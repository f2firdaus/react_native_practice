import { View, Text, Image, Button } from "react-native";
import React from "react";

const Cards = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>

      <Image
        source={require("../../assets/profile.jpg")}
        style={{
          borderRadius: 200/2,
          width: 200,
          marginTop:15,
          height: 200,
          alignItems: "center",
          padding: 12,
          
        }}
      />
      <Text>I am Firdaus Naseem</Text>
      <Button title="Press Me" onPress={() => alert("CLicked")}></Button>
    </View>
  );
};

export default Cards;
