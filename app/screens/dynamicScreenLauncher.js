import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { ButtonGroup } from 'react-native-elements'
import { Colors, Fonts, Masonry } from '../style';
var Color = require('color');

const colorChoices = {blue: Colors.blue,
                      orange: Colors.orange,
                      red: Colors.red,
                      green: Colors.green};

class DynamicScreenLauncher extends Component {

  static navigationOptions = {
    title: 'Dynamic Launcher',
  };
  constructor(props) {
    super(props);
    this.state = {
      bgroundColor: colorChoices[0],
      selectedIndex: 0,
      hugRightEdge: 0
    }
    this.setPageColor = this.setPageColor.bind(this);
    this.setHugsRightEdge = this.setHugsRightEdge.bind(this);
    this.generateScreen = this.generateScreen.bind(this);
  }
  setPageColor(index) {
    this.setState({
      bgroundColor: Object.values(colorChoices)[index],
      selectedIndex: index,
    })
  }
  setHugsRightEdge(hugsRightEdge) {
    this.setState({
      hugRightEdge: hugsRightEdge
    })
  }
  generateScreen() {
    this.props.navigation.navigate('DynamicScreen', this.state);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (

    <View style={styles.container}>
      <Text> Color:  </Text>
      <ButtonGroup
        onPress={this.setPageColor}
        buttons={Object.keys(colorChoices)}
        selectedIndex={this.state.selectedIndex}
        containerStyle={{margin: 0, padding: 0, height: 100, width: '100%'}} />
      <Text> Edge to hug:  </Text>
      <ButtonGroup
        onPress={this.setHugsRightEdge}
        buttons={['left', 'right']}
        selectedIndex={this.state.hugRightEdge}
        containerStyle={{margin: 0, padding: 0, height: 100, width: '100%'}} />
        <View style={{flex: 1}}>
          <View style={{flex: 1}} />
          <View style={{alignSelf: 'flex-end', justifyContent: 'center', backgroundColor: Colors.grayGunmetal , height: 100, width: '100%'}}>
            <Button raised
              buttonStyle={{backgroundColor: 'black', borderRadius: 10}}
              textStyle={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}
              title="Spawn screen"
              onPress={this.generateScreen} />


          </View>
        </View>



    </View>
  )
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

export default DynamicScreenLauncher;
