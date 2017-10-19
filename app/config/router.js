import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DynamicScreen from  '../components/dynamicScreen';
import BasicScreen from '../components/basicScreen';
import { Colors } from '../style';
import StaticScreen0 from '../screens/staticScreen0';
import FlatListScreen from '../screens/flatListScreen';

function createComponent(instance, newProps) {
  var component = React.createElement(instance, newProps);

  return component;
}

export const StaticStack = StackNavigator({
  Screen0: { screen: StaticScreen0},
  Screen1: { screen: FlatListScreen},
})

// export const DynamicStack = StackNavigator({
//   Screen0: {
//     screen: () => createComponent(DynamicScreen, { bgroundColor: Colors.orange } ),
//   },
//   Screen1: {
//     screen: () => <DynamicScreen bgroundColor={Colors.blue} onRightEdge='true' />,
//    },
// });
//
// export const NestedStack = TabNavigator({
//   NavStack0: StackNavigator({
//     Screen0: {
//       screen: DynamicScreen0,
//       navigationOptions: {title: 'External Title'}
//     },
//     Screen1: {
//       screen: DynamicScreen1,
//       navigationOptions: { title: 'Screen 1' }
//     }
//   }),
//   NavStack1: StackNavigator({
//      Screen0: {
//        screen: StaticScreen0
//      },
//      Screen1: {
//        screen: StaticScreen1
//      }
//   })
// });
