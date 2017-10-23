import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing, Text} from 'react-native';
import {ButtonGroup, Button, CheckBox} from 'react-native-elements';
import {Colors, Fonts, Masonry} from '../style'
var Dimensions = require('Dimensions');

var ORB_WIDTH = 60;

export default class ComplexAnimatedScreen extends Component {
  static navigationOptions = {
    title: 'Complex Animated'
  }

  constructor(props) {
    super(props);
    this.state = {
      loop: false,
      includeOpacity: false,
      includeSpin: true,
      includeResize: true,
      orbSize: ORB_WIDTH,
      includeReposition: true,
      animatedValue: new Animated.Value(0)
    }

    this.startAnimation = this.startAnimation.bind(this);

  }

  startAnimation() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      this.state.animatedValue.setValue(0)
      if (this.state.loop) {
        this.startAnimation();
      }
    });
  }

  render() {


    const opacity = (this.state.includeOpacity ? this.state.animatedValue.interpolate({
      inputRange:[0, 0.5, 1],
      outputRange: [1, 0, 0.75]
    }) : 1);

    const spin = (this.state.includeSpin ? this.state.animatedValue.interpolate({
      inputRange:[0, 1],
      outputRange: ['0deg', '360deg']
    }) : '0deg' );

    const size = (this.state.includeResize ? this.state.animatedValue.interpolate({
      inputRange:[0, 0.5, 1],
      outputRange: [this.state.orbSize, this.state.orbSize * 2, this.state.orbSize]
    }) : this.state.orbSize );



    const borderRadius = (this.state.includeResize ? ORB_WIDTH / 2 : ORB_WIDTH);

    return (
      <View style={styles.container}>
        <View style={[Masonry.fillsContainer]}>
          <Animated.View style={[styles.basicOrb, {
            borderRadius: borderRadius,
            opacity: opacity,
            transform: [{rotate: spin}],
            width: size,
          }]} />
        </View>
        <View style={[Masonry.fillsContainer]}>
          <View style={[Masonry.fillsContainer]} />
          <View style={{width:'100%', justifyContent: 'center', padding: 16 }}>
            <CheckBox
              title='Resize'
              containerStyle={{backgroundColor: Colors.grayMid, borderColor: Colors.grayMid}}
              textStyle={{color: 'white'}}
              onPress={()=> {this.setState({includeResize: !this.state.includeResize})}}
              checkedColor='white'
              checked={this.state.includeResize} />
            <CheckBox
              title='Spin'
              containerStyle={{backgroundColor: Colors.grayMid, borderColor: Colors.grayMid}}
              textStyle={{color: 'white'}}
              onPress={()=> {this.setState({includeSpin: !this.state.includeSpin})}}
              checkedColor='white'
              checked={this.state.includeSpin} />
            <CheckBox
              title='Opacity'
              containerStyle={{backgroundColor: Colors.grayMid, borderColor: Colors.grayMid}}
              textStyle={{color: 'white'}}
              onPress={()=> {this.setState({includeOpacity: !this.state.includeOpacity})}}
              checkedColor='white'
              checked={this.state.includeOpacity} />
            <CheckBox
              title='Loop'
              containerStyle={{backgroundColor: Colors.grayMid, borderColor: Colors.grayMid}}
              textStyle={{color: 'white'}}
              onPress={()=> {this.setState({loop: !this.state.loop})}}
              checkedColor='white'
              checked={this.state.loop} />
            <Button
              large raised
              title='Start Animation'
              buttonStyle={[ {backgroundColor: Colors.orange,  height: 50, flex: 1}]}
              onPress={this.startAnimation} />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grayGunmetal
  },
  basicOrb: {
    backgroundColor: Colors.blue,
    width: 40,
    aspectRatio: 1,
  }

});
