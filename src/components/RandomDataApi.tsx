import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const RandomDataApi = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        console.log(data.results);
        setProfile(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile()
  },[]);
  return (
    <View>
      <FlatList data={profile} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=><View>
    <Text>{item.title}{item.name.first} {item.name.last}</Text>
    <Text>{item.email}</Text>
<Image source={{uri: item.picture.medium}} style={{width:100,height:100}}/>

      </View>} />
    </View>
  );
};

export default RandomDataApi;
