import React,{useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Books from "../components/Books";
import InfoBook from "../components/InfoBook";

const Stack = createStackNavigator();

export default function Bookstack(){
 return(
    <Stack.Navigator>
      <Stack.Screen
      name="books"
      component={Books}
      options={{title: "Libros"}}/>
      <Stack.Screen
      name="InfoBook"
      component={InfoBook}
      options={{title: "Libro"}}/>
    </Stack.Navigator>
 );   
}