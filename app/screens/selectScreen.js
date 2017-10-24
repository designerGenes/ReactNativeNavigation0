import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';
var Color = require('color');

const screens = ['FlatList', 'DynamicScreenLauncher', 'AnimatedScreen', 'ComplexAnimatedScreen'];
const blues = [Colors.grayMid, Color(Colors.grayMid).lighten(0.1)]
export default class SelectScreen extends Component {
  constructor(props) {
    super(props)
    this.launchScreen = this.launchScreen.bind(this);
  }

  launchScreen(index) {
    this.props.navigation.navigate(screens[index]);
  }

  render() {
    return(
      <View style={[Masonry.container, {backgroundColor: Colors.grayGunmetal, alignItems: 'center'}]}>
        <Text style={styles.buttonGroupTitleText}> Launch Example </Text>
        <Button
          large raised
          title='FlatList'
          onPress={() => this.launchScreen(0)}
          buttonStyle={[styles.launchButton, {backgroundColor: blues[0]}]}
        />
        <Button
          large raised
          title='Dynamic'
          onPress={() => this.launchScreen(1)}
          buttonStyle={[styles.launchButton, {backgroundColor: blues[1]}]}
        />
        <Button
          large raised
          title='Animated'
          onPress={() => this.launchScreen(2)}
          buttonStyle={[styles.launchButton, {backgroundColor: blues[0]}]}
        />
        <Button
          large raised
          title='Complex'
          onPress={() => this.launchScreen(3)}
          buttonStyle={[styles.launchButton, {backgroundColor: blues[1]}]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  launchButton: {
    padding: 16,
    width: '100%',
    margin: 8
  },
  buttonGroupTitleText: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});
