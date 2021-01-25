import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharityScreen from './screens/CharityScreen';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Charities" component={CharityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

//<Tab.Screen name="Favorites" component={FavoritesScreen} />
//<Tab.Screen name="Profile" component={ProfileScreen} />
