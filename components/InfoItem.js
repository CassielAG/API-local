import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, Icon, ListItem } from "react-native-elements";

export default function InfoItem(props){
    const{info} = props.route.params;
    console.log(info);
 return(
    <View>
        <Card>
            <Avatar 
            size="xlarge"
            icon={{
                name: 'edit', 
                color: 'black',
                type: 'font-awesome'
            }}
            overlayContainerStyle={{BackgroundColor: 'white'}}
            containerStyle={styles.styleAvatar}/>
            <Text h1 style={{textAlign: "center"}}>{info.nombre}</Text>
            <Text h5> </Text>
            <Card.Divider/>
            <Text h5 style={{textAlign: "center"}}>{info.descripcion}</Text>
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
