import { View, Text, Button } from 'react-native'
import React, { useReducer } from 'react'

const initialState={count:10};

function reducer(state:any,action:any){
    switch (action.type) {
        case "increment":
            return {count:state.count+1};
        case "decrement":
            return {count:state.count -1};
            
            break;
    
        default:
            throw new Error ("no enput");
    }
}
const Counter = () => {

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <View>
      <Text>Counter:{state.count}</Text>
      <Button title='inc' onPress={()=>dispatch({type:"increment"})} />
        <Button title='decrement' onPress={()=>dispatch({type:'decrement'})}/>
    </View>
  )
}

export default Counter