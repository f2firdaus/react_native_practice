import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
// interface Mydata{
//     items:string[]
// }
const FetchAPi = () => {
    const [meals,setMeals] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchApi=async()=>{
           
           const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
           const data= await response.json();
        //    setMeals(data)
        // console.log(data.meals);
        setMeals(data.meals);
        }
        try {
            fetchApi()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        // fetchApi();
    },[]);
    if(loading){
      return <Text>Loading......</Text>
      
    }
  return (
    <View>
        <FlatList data={meals} keyExtractor={(item:any,id)=>id.toString()} renderItem={({item})=><View >
            
          <Text style={{fontSize:20,fontWeight:'bold'}}>{item.strMeal}</Text>  
    <Image source={{uri: item.strMealThumb}} style={{width:200,height:200}} />
        </View>} />
      <View>
        {/* <Image source={} /> */}

      </View>
    </View>
  )
}

export default FetchAPi