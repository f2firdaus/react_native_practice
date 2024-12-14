import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
interface Data{
    London:string;
    NewYork:string;
    Paris:string;
}
const GetWeather = () => {
    const weatherData:any={
        London:"20°C,clear",
        NewYork:"22°C, sunny",
        Paris:"8°C, cold"
    }
    const [weather,setWeather]=useState('');
    const [weatherInfo,setWeatherInfo] =useState("");
    const handleWeather:any=()=>{
        // setWeather(weather)
        setWeatherInfo(weatherData[weather] || "No Data")
    }
  return (
    <View>
      <Text>GetWeather</Text>

    <TextInput  value={weather} onChangeText={(e:any)=>setWeather(e)} />
    <Button title='Get Weather' onPress={handleWeather} />
    <Text>{weatherInfo}</Text>
    </View>
  )
}

export default GetWeather