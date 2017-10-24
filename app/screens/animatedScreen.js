import React, { Component } from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');
var ORB_DIMENSIONS = 30;
var SPRING_CONFIG = {tension: 2, friction: 2};

export default class AnimatedScreen extends Component {
  static navigationOptions = {
    title: 'Animated',
  };

  constructor(props) {
    super(props);
    this.state = {
      usesCombinedValue: 0,
      combinedAnimatedValue: new Animated.Value(0),
      pan: new Animated.ValueXY(),
      diameter: new Animated.Value(ORB_DIMENSIONS),
      opacity: new Animated.Value(1)
    }
    this.orbStyle = this.orbStyle.bind(this);
    this._onSelectAnimation = this._onSelectAnimation.bind(this);
  }

  orbStyle() {
    return [
      styles.orb, !this.state.usesCombinedValue && { transform : this.state.pan.getTranslateTransform(),
                    width: this.state.diameter,
                    opacity: this.state.opacity
                  },
                  this.state.usesCombinedValue && {
                    opacity: this.state.combinedAnimatedValue.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0, 1, 0]
                    })
                  }
          ]
  }

  _onSelectAnimation(index) {
    switch (index) {
      case 0: // reposition
        Animated.sequence([
          Animated.timing(this.state.pan, {
            toValue: {x:0, y: (height / 4) - ORB_DIMENSIONS},
            duration: 300
          }),
          Animated.spring(this.state.pan, {
            ...SPRING_CONFIG, toValue: {x:0, y: 0}

          }),
        ]).start();
        break;
      case 1: // resize
        Animated.sequence([
          Animated.spring(this.state.diameter, {
            ...SPRING_CONFIG, toValue: ORB_DIMENSIONS * 2
          }),
          Animated.spring(this.state.diameter, {
            ...SPRING_CONFIG, toValue: ORB_DIMENSIONS
          }),
        ]).start();
        break;
      case 2: // fade out/in
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1000
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1000
        }),
        ]).start();
        break;
    }
  }

  render() {
    return (
      <View style={[Masonry.container, {alignItems: 'center', paddingTop: 30} ]}>
        <View style={styles.orbBox}>
          <Animated.View style={this.orbStyle()} />
        </View>
        <View style={{flex: 1, backgroundColor: Colors.grayMid}} >
          <View style={{flex: 1}} />
          <ButtonGroup
            containerStyle={{width: '100%'}}
            buttons={["Spring", "Resize", "Opacity"]}
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
