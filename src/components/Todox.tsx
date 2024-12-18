import { View, Text, FlatList, TextInput, Button } from "react-native";
import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "remove":
      return {
        todos: state.todos.filter((item: any) => item.id !== action.payload),
      };
    default:state
  }
};
const Todox = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
    const [input,setInput]=useState('');
    const handleTodo=()=>{
        if(input.trim()){
            dispatch({type:'add',payload:input})
        }
    }
    const handleRemove=(id)=>{
        dispatch({type:'remove',payload:id})
    }
  return (
    <View>
      <Text>Todox</Text>
      <TextInput style={{borderWidth:1,borderColor:'red'}} onChangeText={setInput} />
      <Button title="Add Todo" onPress={handleTodo} />
      <FlatList data={state?.todos} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <View>
            <Text>{item.text}</Text> 
            <Button title="remove" onPress={()=>handleRemove(item.id)} /> 
        </View>
      )} />
    </View>
  );
};

export default Todox;
