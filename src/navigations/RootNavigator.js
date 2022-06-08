import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

export const RootNavigationScreens = {
  APP: 'APP',
};

const RootStack = createStackNavigator();

function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={RootNavigationScreens.APP}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={RootNavigationScreens.APP} component={AppNavigator} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
