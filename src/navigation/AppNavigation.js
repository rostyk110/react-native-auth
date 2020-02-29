import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ListScreen } from '../screens/ListScreen';
import { MapScreen } from '../screens/MapScreen';
import { THEME } from '../theme';

const options = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: THEME.MAIN_COLOR
  },
  headerTitleAlign: 'center'
};

const Map = createStackNavigator();
const MapNavigator = () => (
  <Map.Navigator screenOptions={options}>
    <Map.Screen name='Map' component={MapScreen} />
  </Map.Navigator>
);

const List = createStackNavigator();
const ListNavigator = () => (
  <List.Navigator screenOptions={options}>
    <List.Screen name='List' component={ListScreen} />
  </List.Navigator>
);

const Drawer = createDrawerNavigator();
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='List' component={ListNavigator} />
        <Drawer.Screen name='Map' component={MapNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
