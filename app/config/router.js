import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DynamicScreen from  '../screens/dynamicScreen';
import DynamicScreenLauncher from  '../screens/dynamicScreenLauncher';
import BasicScreen from '../components/basicScreen';
import { Colors } from '../style';
import StaticScreen0 from '../screens/staticScreen0';
import FlatListScreen from '../screens/flatListScreen';

export const StaticStack = StackNavigator({
  Screen0: { screen: StaticScreen0},
  Screen1: { screen: FlatListScreen},
})

export const DynamicStack = StackNavigator({
  Launcher: { screen: DynamicScreenLauncher },
  DynamicScreen: { screen: DynamicScreen },
});
