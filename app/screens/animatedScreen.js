import React, { Component } from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');
var ORB_DIMENSIONS = 30;
var SPRING_CONFIG = {tension: 2, friction: 2};

export default class AnimatedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    }
    this.getStyle = this.getStyle.bind(this);
    this._onSelectAnimation = this._onSelectAnimation.bind(this);
  }

  getStyle() {
    return [
      styles.orb, { transform : this.state.pan.getTranslateTransform() }
    ]


  }

  _onSelectAnimation(index) {
    switch (index) {
      case 0:
      Animated.sequence([
        Animated.spring(this.state.pan, {
          ...SPRING_CONFIG, toValue: {x:0, y: (height / 4) - ORB_DIMENSIONS}
        }),
        Animated.spring(this.state.pan, {
          ...SPRING_CONFIG, toValue: {x:0, y: 0}
        }),
      ]).start();
        break;
      case 1:
        break;
    }
  }

  render() {
    return (
      <View style={[Masonry.container, {alignItems: 'center', paddingTop: 30} ]}>
        <View style={styles.orbBox}>
          <Animated.View style={this.getStyle()} />
        </View>
        <View style={{flex: 1, backgroundColor: Colors.grayMid}} >
          <View style={{flex: 1}} />
          <ButtonGroup
            containerStyle= {{width: '100%'}}
            buttons={["animation1", "animation2"]}
            onPress={this._onSelectAnimation}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orbBox: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    padding: '10%',
    backgroundColor: Colors.grayGunmetal
  },
  orb: {
    backgroundColor: Colors.blue,
    borderRadius: ORB_DIMENSIONS / 2,
    width: ORB_DIMENSIONS,
    aspectRatio: 1
  }
});
