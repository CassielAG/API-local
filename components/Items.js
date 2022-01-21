import React, { useEffect, useState } from 'react';
import { ListItem, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function Items() {
  const nav = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://a90mmij00h.execute-api.us-east-2.amazonaws.com/dev/getAccesorios')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderIt = ({ item }) => (
    <ListItem bottomDivider onPress={() => nav.navigate("item",{info:item})}>
      <Ionicons name={'md-bookmarks'} size={25}/>
      <ListItem.Content>
        <ListItem.Title>Nombre: {item.nombre}</ListItem.Title>
        <Divider orientation="horizontal" />
        <Text>{item.descripcion}</Text>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderIt}
        />
      )}
    </View>
  );
};