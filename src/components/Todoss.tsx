import { View, Text, TextInput, Button, FlatList } from "react-native";
import React, { useReducer, useState } from "react";

const initialState={todos:[]};
interface Todo{
    id:string;
    text:string
}
interface State{
    todos:Todo[]
}
interface AddTodoAction{
    type:'add';
    payload:string
}
interface RemoveTodoAction{
    type:'remove';
    payload:string
}
type Action =AddTodoAction | RemoveTodoAction;
const reducer= (state:State,action:Action)=>{
    switch(action.type){
        case 'add':
        return {
            todos:[...state.todos,{id:Date.now().toString(),text:action.payload}]
        }
        case 'remove':
            return {
              todos:state.todos.filter((todo)=>todo.id !== action.payload)  
            }
        default :state;    
    };
        
}
const Todoss = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input,setInput]=useState<string>('');


const handleTodo=()=>{
    dispatch({type:'add', payload:input})
    console.log(state.todos)
}

  return (
    <View>
      <Text>Todoss</Text>
      <TextInput value={input} style={{borderColor:'red',borderWidth:1}} onChangeText={setInput} />
    <Button title="add Todo" onPress={handleTodo} />
    <FlatList data={state.todos} keyExtractor={(item)=>item.id} renderItem={({item})=>(
        <View>
            <Text>{item.text}</Text>
        </View>
    )} />
    </View>
  );
};

export default Todoss;
