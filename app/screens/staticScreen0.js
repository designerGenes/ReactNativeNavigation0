import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import {Colors, Fonts, Masonry} from '../style';
import Button from 'react-native-button';

class StaticScreen0 extends Component {
  static navigationOptions = {
    title: 'Static page'
  };
  constructor(props) {
    super(props);
    this.state = {
      bgroundColor: Colors.orange
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={[styles.container, {backgroundColor: this.state.bgroundColor}]}>
        <View style={[Masonry.row]}>
          <View style={{flex: 1}}>
            <Text style={[Fonts.urbanaMedium, styles.welcomeText, Masonry.hugRightEdge]}> This is a static screen </Text>
          </View>
        </View>
        <View style={Masonry.row}>
          <Button
            onPress={() => navigate('Screen1')}
            style={[styles.goDeeperButton]}> FlatList </Button>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  goDeeperButton: {
    padding: 16,
    backgroundColor: 'white',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: Colors.grayGunmetal
  },
  welcomeText: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10%',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default StaticScreen0;
