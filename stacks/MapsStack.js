import React,{useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Map from "../components/Map";

const Stack = createStackNavigator();

export default function Mapstack(){
 return(
    <Stack.Navigator>
      <Stack.Screen
      name="maps"
      component={Map}
      options={{title: "Sucursales"}}/>
    </Stack.Navigator>
 );   
}