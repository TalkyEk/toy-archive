import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home, List } from '../assets/icons/bottom-icons';
import { Colors } from '../assets/styles';
// import { Explore } from '@@views/explore';
import { HomeScreen } from '../view/HomeScreen';
import { AllToys } from '../common/components/all-toys/AllToys';

const Tab = createBottomTabNavigator();

export const BottomTabNavigatorScreens = {
  HOME: 'HOME',
  ARCHIVE: 'ARCHIVE',
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={BottomTabNavigatorScreens.HOME}
      screenOptions={{
        tabBarActiveTintColor: Colors.LightBlue,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name={BottomTabNavigatorScreens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <Tab.Screen
        name={BottomTabNavigatorScreens.ARCHIVE}
        component={AllToys}
        options={{
          tabBarIcon: ({ color }) => <List fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default BottomTabNavigator;
