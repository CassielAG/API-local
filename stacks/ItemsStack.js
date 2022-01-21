import React,{useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Items from "../components/Items";
import InfoItem from "../components/InfoItem";

const Stack = createStackNavigator();

export default function Itemstack(){
 return(
    <Stack.Navigator>
      <Stack.Screen
      name="items"
      component={Items}
      options={{title: "Acesorios"}}/>
      <Stack.Screen
      name="item"
      component={InfoItem}
      options={{title: "Acesorio"}}/>
    </Stack.Navigator>
 );   
}