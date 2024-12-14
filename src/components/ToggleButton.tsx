import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ToggleButton = () => {
    const [isOn,setIsOn] =useState(false);
    
    const toggleBtn=()=>{
    setIsOn(()=>!isOn)
      
    }

  return (
    <View>
      <Text >{isOn ? "ON":"OFF"}</Text>
      <Button  title='Toggle' onPress={toggleBtn} />
    </View>
  )
}

export default ToggleButton