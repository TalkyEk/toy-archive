import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';

export const AppNavigationScreens = {
  TABS: 'TABS',
};

const AppStack = createStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name={AppNavigationScreens.TABS} component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
