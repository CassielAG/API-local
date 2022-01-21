import React,{useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Workers from "../components/Workers";
import InfoWorker from "../components/InfoWorker";

const Stack = createStackNavigator();

export default function UserStack(){
 return(
    <Stack.Navigator>
      <Stack.Screen
      name="workers"
      component={Workers}
      options={{title: "Trabajadores"}}/>
      <Stack.Screen
      name="worker"
      component={InfoWorker}
      options={{title: "Trabajador"}}/>
    </Stack.Navigator>
 );   
}