import React, { Component } from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';
var Color = require('color');

const colorChoices = [Colors.blue, Colors.orange, Colors.red, Colors.green];

export class DynamicScreen extends Component {
  static navigationOptions = {
    title: 'Dynamic Screen',
  };
  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;

    this.state = {
      bgroundColor: colorChoices[params.selectedIndex],
      selectedIndex: params.selectedIndex,
      hugRightEdge: params.hugRightEdge
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    const bgroundColor = this.state.bgroundColor;
    const usesDarkBackground = Color(bgroundColor).dark();
    const textColor = usesDarkBackground ? 'black' : 'white';
    const altTextColor = usesDarkBackground ? 'white' : 'black';
    const hueStr = usesDarkBackground ? 'dark' : 'light';
    const bgroundHighlightColor = usesDarkBackground ? Color(bgroundColor).lighten(0.2) : Color(bgroundColor).darken(0.35);
    const onRightEdge = this.state.hugRightEdge;
    return (
      <View style={[styles.container, {backgroundColor: bgroundColor}]}>
        <View style={[Masonry.row, {flex: 0.5}]}>
          <Text style={[styles.textBlock, {color: textColor, backgroundColor: altTextColor}]}>
            this view uses a {hueStr} colored background
          </Text>
        </View>

        <View style={[Masonry.row, {flex: 0.5}]}>
          <View style={{flex:1}}>
            <Text style={[styles.textBlock, onRightEdge && Masonry.hugRightEdge,
              {color: textColor, backgroundColor: bgroundHighlightColor, width: '50%'}]}>
              this view hugs the { (onRightEdge) ? 'right' : 'left' } edge
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBlock: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    backgroundColor: 'white'
  },
  titleRow: {
    alignItems: 'center',
    padding: '10%'
  },
  screenTitleText: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    margin: 16
  }
});

export default DynamicScreen;
