import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Fonts, Masonry} from '../style';

class PersonCell extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.paddedText, styles.nameText]}> {this.props.name} </Text>
        <Text style={[styles.paddedText, styles.favoriteCityText]}> {this.props.favoriteCity} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  paddedText: {
    padding: 20,
    flex: 1
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  favoriteCityText: {
    fontSize: 18,
    color: 'white',
  }
});

export default PersonCell;
