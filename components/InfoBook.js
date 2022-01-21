import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, Icon, ListItem } from "react-native-elements";

export default function InfoBook(props){
    const{info} = props.route.params;
    console.log(info);
 return(
    <View>
        <Card>
            <Avatar 
            size="xlarge"
            icon={{
                name: 'book', 
                color: 'black',
                type: 'font-awesome'
            }}
            overlayContainerStyle={{BackgroundColor: 'white'}}
            containerStyle={styles.styleAvatar}/>
            <Text h1 style={{textAlign: "center"}}>{info.titulo}</Text>
            <Text h5 style={{textAlign: "center"}}>Autor: {info.autor}</Text>
            <Text h5> </Text>
            <Card.Divider/>
            <Text h5 style={{textAlign: "center"}}>Genero: {info.genero}</Text>
            <Text h5 style={{textAlign: "center"}}>Editorial: {info.editorial}</Text>
            <ListItem containerStyle={styles.mon}>
                <Icon name="money" type="font-awesome"/>
                <ListItem.Content>
                    <ListItem.Title>${info.precio}.00</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </Card>
    </View>
 );   
}

const styles = StyleSheet.create({
    styleAvatar: {
        marginLeft: 70,
        marginRight: 70
    },
    mon:{
        marginLeft: 70,
        marginRight: 70
    }
});
