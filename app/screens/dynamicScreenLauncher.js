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

var orderedColors = [
      {name: 'blue', color: Colors.blue},
      {name: 'orange', color: Colors.orange},
      {name: 'red', color: Colors.red},
      {name: 'green', color: Colors.green}
]


class DynamicScreenLauncher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgroundColor: orderedColors[0].color,
      selectedIndex: 0,
      hugRightEdge: 0
    }
    this.setPageColor = this.setPageColor.bind(this);
    this.setHugsRightEdge = this.setHugsRightEdge.bind(this);
    this.coloredCells = this.coloredCells.bind(this);
    this.launchScreen = this.launchScreen.bind(this);
  }
  coloredCells()   {
    var cells = [];
    var len = orderedColors.length;
    var selectedIndex = this.state.selectedIndex;
    for (var i=0;i<len;i++) {
      var z = i;
      const bgroundColor = orderedColors[z];
      const highlighted = (selectedIndex === z);
      const textColor = Color(bgroundColor.color).darken(0.5);
      var coloredCell = () =>
      <View style={[{backgroundColor: bgroundColor.color, flex: 1, alignSelf: 'stretch'}, !highlighted && {backgroundColor: Colors.grayGunmetal}]}>
        <View style={{flex: 1}} />
        <Text style={[styles.coloredButtonGroupText, {color: textColor}, !highlighted && {color: 'white'}]}>
            {bgroundColor.name}
        </Text>
        <View style={{flex: 1}} />
      </View>;
      cells.push({element: coloredCell});
    }
    return cells;
  }
  setPageColor(index) {
    this.setState({
      bgroundColor: orderedColors[index].color,
      selectedIndex: index,
    });
    console.log("Set selectedIndex to " + index);
  }
  setHugsRightEdge(hugsRightEdge) {
    this.setState({
      hugRightEdge: hugsRightEdge
    })
  }
  launchScreen() {
    this.props.navigation.navigate('DynamicScreen');
  }
  render() {
    console.log(this.props.navigation);
    const { navigate } = this.props.navigation.navigate;
    const leftButton = () => <Text> Left </Text>
    const rightButton = () => <Text> Right </Text>
    return (

    <View style={[Masonry.container]}>
      <View style={{flex: 1, alignItems: 'center'}} >
        <Text style={[styles.buttonGroupTitleText]}> Color:  </Text>
        <ButtonGroup
          onPress={this.setPageColor}
          buttons={this.coloredCells()}
          selectedIndex={this.state.selectedIndex}
          containerStyle={{margin: 0, padding: 0, height: 100}} />
        <Text style={[styles.buttonGroupTitleText]}> Edge to hug:  </Text>
        <ButtonGroup
          onPress={this.setHugsRightEdge}
          buttons={[{element: leftButton}, {element: rightButton} ]}
          selectedIndex={this.state.hugRightEdge}
          containerStyle={{margin: 0, padding: 0, height: 100}} />
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1}} />
        <View style={{alignSelf: 'flex-end', justifyContent: 'center', backgroundColor: Colors.grayGunmetal , height: 100, width: '100%'}}>
          <Button raised
            buttonStyle={{backgroundColor: 'black', borderRadius: 10}}
            textStyle={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}
            title="Spawn screen"
            onPress={this.launchScreen} />
        </View>
      </View>
    </View>
  )
  }
}

var styles = StyleSheet.create({
  coloredButtonGroupText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonGroupTitleText: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
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
