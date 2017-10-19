import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Colors, Fonts, Masonry } from '../style';


export default class BasicScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: Colors.green, fontWeight: 'bold', fontSize: 40}}> Basic Screen </Text>
      </View>
    )
  }
}
