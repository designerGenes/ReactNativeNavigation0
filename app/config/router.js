import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DynamicScreen from  '../screens/dynamicScreen';
import DynamicScreenLauncher from  '../screens/dynamicScreenLauncher';
import BasicScreen from '../components/basicScreen';
import SelectScreen from '../screens/selectScreen';
import ComplexAnimatedScreen from '../screens/complexAnimatedScreen';
import { Colors } from '../style';
import AnimatedScreen from '../screens/animatedScreen'
import FlatListScreen from '../screens/flatListScreen';

export const StaticStack = StackNavigator({
  Screen1: { screen: FlatListScreen},
})

export const DynamicStack = StackNavigator({
  SelectScreen: {screen: SelectScreen},
  DynamicScreenLauncher: { screen: DynamicScreenLauncher },
  FlatList: { screen: FlatListScreen },
  DynamicScreen: { screen: DynamicScreen },
  AnimatedScreen: { screen: AnimatedScreen},
  ComplexAnimatedScreen: {screen: ComplexAnimatedScreen},

});
