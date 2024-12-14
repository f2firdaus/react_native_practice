import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Name = () => {
  return (
    <View style={styles.name}>
      <Text style={{ textAlign: "center", padding: 1,color:'white' }}>
        I am FIrdaus Naseem...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    
    
    backgroundColor:'red',
  

    elevation: 14,
    justifyContent:'center',
    // backgroundColor:'#fff',
    borderRadius: 5,
    width:300,
    height:50,
    marginTop:10
  },
});

export default Name;
