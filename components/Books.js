import React, { useEffect, useState } from 'react';
import { ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, View } from 'react-native';

export default function Books() {
  const nav = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://sg474i24lj.execute-api.us-east-2.amazonaws.com/dev/getLibros')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderIt = ({ item }) => (
    <ListItem bottomDivider onPress={() => nav.navigate("InfoBook",{info:item})}>
      <Ionicons name={'md-book'} size={25}/>
      <ListItem.Content>
        <ListItem.Title>Titulo: {item.titulo}</ListItem.Title>
        <ListItem.Subtitle>Autor: {item.autor}</ListItem.Subtitle>
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