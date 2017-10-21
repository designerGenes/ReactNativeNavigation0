import React, { Component } from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';

export default class AnimatedScreen extends Component {
  _onSelectAnimation(index) {
    switch index {
      case 0:
        
        break;
      case 1:
        break;
    }
  }

  render() {
    return (
      <View style={[Masonry.container, {alignItems: 'center', paddingTop: 30} ]}>
        <View style={styles.orbBox}>
          <View style={styles.orb} />
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
    borderRadius: 25,
    width: 50,
    aspectRatio: 1
  }
});
