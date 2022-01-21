import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
//import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export default function Map() {

  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={true} followsUserLocation={true}>
        <MapView.Marker 
          coordinate={{
            latitude:24.035492,
            longitude:-104.6503509
          }}
          title={"Sucursal Paseo"}
          description={"Zona Paseo Durango"}
        />
        <MapView.Marker
          coordinate={{
            latitude:24.0239187,
            longitude:-104.66144
          }}
          title={"Sucursal Morelos"}
          description={"Zona Centro"}
        />
        <MapView.Marker
          coordinate={{
            latitude:24.0208918,
            longitude:-104.6953136
          }}
          title={"Sucursal Bebeleche"}
          description={"Zona Museo Bebeleche"}
        />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});