import React from "react";
import { FlatList, Text, View } from "react-native";
import Name from "../components/Name";
import Age from "../components/Age";
import X from "../components/X";
import Cards from "../components/Cards";
import ArrayOfObject from "../components/ArrayOfObject";
import Products from "../components/Products";
import ProductsA from "../components/Props/ProductsA";
import ToggleButton from "../components/ToggleButton";
import GetWeather from "../components/GetWeather";

const Index = () => {
  const products = [
    {
      productName: "Product A",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product B",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product C",
      productImage:
        "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
    {
      productName: "Product D",
      productImage:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productPrice: 19.99,
      productDescription: "Description for Product A",
      isFeatured: true,
    },
  ];
  return (
    <View>
      {/* <Name/>
    <Age/>
    <X/>
    <Cards/> 
      
      <Products/>

      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        data={products}
        renderItem={({ item }) => (
          <ProductsA
            name={item.productName}
            desc={item.productDescription}
            productImage={item.productImage}
            isFeatured={item.isFeatured}
            price={item.productPrice}
          />
        )}
      /> */}

      {/* <ToggleButton/> */}
      <GetWeather/>
    </View>
  );
};

export default Index;
