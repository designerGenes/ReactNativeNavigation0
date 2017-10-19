import React, { Component } from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import { Colors, Fonts, Masonry } from '../style';
var Color = require('color');

class DynamicScreen extends Component {
  constructor(props) {
    super(props);
    var bgroundColor = props.bgroundColor;
    var usesDarkBackground = Color(bgroundColor).dark() || false;
    this.state = {
      stackDepth: props.stackDepth || 0,
      usesDarkBackground: usesDarkBackground,
      textColor: usesDarkBackground ? 'black' : 'white' ,
      altTextColor: usesDarkBackground ? 'white' : 'black' ,
      hueStr: usesDarkBackground ? 'dark' : 'light',
      bgroundColor: bgroundColor,
      bgroundHighlightColor: usesDarkBackground ? Color(bgroundColor).lighten(0.2) : Color(bgroundColor).darken(0.35),
      onRightEdge: props.onRightEdge
    };
  }
  render() {
    console.log(this.props);
    const topSpacingForDepthLabel = this.state.stackDepth * 8;
    return (
      <View style={[styles.container, {backgroundColor: this.state.bgroundColor}]}>
        <View style={[styles.stackDepthRow, {top: topSpacingForDepthLabel}]}>
          <View style={[Masonry.row, styles.hugRightEdge]}>
            <Text style={[styles.textBlock]}> {this.state.stackDepth} </Text>
          </View>
        </View>

        <View style={[Masonry.row]}>
          <Text style={[styles.textBlock, {color: this.state.textColor, backgroundColor: this.state.altTextColor}]}>
            this view uses a {this.state.hueStr} colored background
          </Text>
        </View>

        <View style={[Masonry.row]}>
          <View style={{flex:1}}>
            <Text style={[styles.textBlock, this.state.onRightEdge && styles.hugRightEdge,
              {color: this.state.textColor, backgroundColor: this.state.bgroundHighlightColor, width: '70%'}]}>
              this view hugs the { (this.state.onRightEdge === 'true') ? 'right' : 'left' } edge
            </Text>
          </View>
        </View>

        <View style={[styles.goDeeperRow]}>
          <Button
            title='Go Deeper'
            onPress= {()=>{}}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  hugRightEdge: {
    alignSelf: 'flex-end'
  },
  textBlock: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20,
    backgroundColor: 'white'
  },
  stackDepthText: {
    textAlign: 'center'
  },
  goDeeperRow: {
    flex: 0.2,
    padding: 6,
    backgroundColor: 'black'
  },
  titleRow: {
    alignItems: 'center',
    padding: '10%'
  },
  stackDepthRow: {
    flex: 0.4,
    width: '100%',
    alignItems: 'flex-start'
  },
  screenTitleText: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    margin: 16
  }
});

export default DynamicScreen;
