import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
interface Mydata{
  input:string;
  todos:string[];
}
const Todos = () => {

  const [input,setInput] =useState<string>('');
  const [todos,setTodos] =useState<string[]>([]);
  
  const handleTodo=()=>{
    if(input.trim() !=='' ){
      setTodos([...todos,input])

    }
    setInput('')
  }
  const handleDelete=(e:any)=>{
    const filtered= todos.filter((item)=>item !==e);
    setTodos(filtered)
  }
  return (
    <View>
      <Text style={{fontSize:50}}>Todos</Text>
      <TextInput value={input} style={{borderColor:'red', borderWidth:2 ,height:40}} onChangeText={(e)=>setInput(e)}/>
      <Button title='Add Todo' onPress={handleTodo} />
      <View>
        <FlatList data={todos} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>
          
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text >{item}</Text>

        <Button title='Delete' onPress={()=>handleDelete(item)} />
        </View>
      }/>
      </View>
    </View>
  )
}

export default Todos