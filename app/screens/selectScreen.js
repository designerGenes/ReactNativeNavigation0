import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';

export default class SelectScreen extends Component {
  constructor(props) {
    super(props)
    this.launchScreen = this.launchScreen.bind(this);
  }
  launchScreen(index) {
    var screens = ['FlatList', 'DynamicScreenLauncher', 'AnimatedScreen']
    this.props.navigation.navigate(screens[index]);
  }

  render() {
    return(
      <View style={Masonry.container}>
      <Text style={styles.buttonGroupTitleText}> Launch Example </Text>
        <ButtonGroup
          buttons={['Flat List', 'Dynamic Screen', 'Animated']}
          onPress={this.launchScreen}
          containerStyle={{margin: 0, padding: 0, height: 100}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonGroupTitleText: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
  }
});
