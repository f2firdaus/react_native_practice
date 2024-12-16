import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'

const BackgroundUpdate = () => {
    const [colors,setColor] =useState('');
    const allColors=['red','green','blue','yellow']
   
  return (
    <View style={{backgroundColor:`${colors}`}} >
        <FlatList data={allColors} keyExtractor={(item,index)=>index.toString()} renderItem={({item,index})=><Text style={{width:200,height:200,backgroundColor:`${item}`, borderRadius:200/2}} onPress={()=>setColor(item)} ></Text>} />
  
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'',
        width:'auto',
        
    }
})
export default BackgroundUpdate