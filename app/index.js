import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from './style'
import { StaticStack } from './config/router';

class App extends Component {
  render() {
    return (
      <StaticStack />
    )
  }
}

export default App;
