import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface Product{
    name:string;
    desc:string;
    productImage:string;
    isFeatured:boolean;
    price:number
}
const ProductsA = ({name,desc,isFeatured,productImage,price}:Product) => {
  return (
    <View>

      <Text>{name}</Text>
      <Text>{desc}</Text>
      <View>
      <Image style={styles.images} source={{uri:productImage}} />

      </View>
      <Text>{price}</Text>
      {isFeatured && <Text>featured</Text>}

    </View>
  )
}
const styles=StyleSheet.create({
    images:{
        width:200,
        height:200
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    }
})
export default ProductsA