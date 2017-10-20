import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from './style'
import { DynamicStack } from './config/router';

class App extends Component {
  render() {
    return (
      <DynamicStack />
    )
  }
}

export default App;
