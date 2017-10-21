import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DynamicScreen from  '../screens/dynamicScreen';
import DynamicScreenLauncher from  '../screens/dynamicScreenLauncher';
import BasicScreen from '../components/basicScreen';
import SelectScreen from '../screens/selectScreen';
import { Colors } from '../style';
import StaticScreen0 from '../screens/staticScreen0';
import AnimatedScreen from '../screens/animatedScreen'
import FlatListScreen from '../screens/flatListScreen';

export const StaticStack = StackNavigator({
  Screen0: { screen: StaticScreen0},
  Screen1: { screen: FlatListScreen},
})

export const DynamicStack = StackNavigator({
  SelectScreen: {screen: SelectScreen},
  DynamicScreenLauncher: { screen: DynamicScreenLauncher },
  FlatList: { screen: FlatListScreen },
  DynamicScreen: { screen: DynamicScreen },
  AnimatedScreen: { screen: AnimatedScreen},
});
