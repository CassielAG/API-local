import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, Image } from "react-native-elements";

export default function InfoWorker(props){
    const{info} = props.route.params;
    console.log(info);
 return(
    <View>
        <Card>
            <Avatar 
            size="xlarge"
            icon={{
                name: 'user', 
                color: 'black',
                type: 'font-awesome'
            }}
            overlayContainerStyle={{BackgroundColor: 'white'}}
            containerStyle={styles.styleAvatar}/>
            <Text h1 style={{textAlign: "center"}}>{info.nombre}</Text>
            <Text h1 style={{textAlign: "center"}}>{info.apellido}</Text>
            <Text h5> </Text>
            <Card.Divider/>
            <Text h5 style={{textAlign: "center"}}>Puesto: {info.puesto}</Text>
            
            <Image
              source={require("../assets/codigo-de-barras.png")}
              style={{ width: 100, height: 100, marginLeft: 100}}
            />
            <Text h5 style={{textAlign: "center"}}>Clave de empleado: {info.clave}</Text>
        </Card>
    </View>
 );   
}

const styles = StyleSheet.create({
    styleAvatar: {
        marginLeft: 70
    },
    mon:{
        marginLeft: 70
    }
});
