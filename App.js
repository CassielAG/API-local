import * as React from 'react';
import MapsStack from './stacks/MapsStack';
import BooksStack from './stacks/BooksStack';
import ItemsStack from './stacks/ItemsStack';
import WorkersStack from './stacks/WorkersStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
//AIzaSyDZG0BKO8ltuA9rlN69LR1RwOxkjk6YsJ0
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Books':
                iconName = focused
                ? 'ios-menu'
                : 'ios-menu-outline';
                break;
              case 'Items':
                iconName = focused 
                ? 'ios-copy' 
                : 'ios-copy-outline';
                break;
              case 'Workers':
                iconName = 'md-people';
                break;
              case 'Map':
                iconName = focused
                ? 'ios-map'
                : 'ios-map-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Books" component={BooksStack} options={{title:'Libros'}}/>
        <Tab.Screen name="Items" component={ItemsStack} options={{title:'Articulos'}}/>
        <Tab.Screen name="Workers" component={WorkersStack} options={{title:'Trabajadores'}}/>
        <Tab.Screen name="Map" component={MapsStack} options={{title:'Sucursales'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
