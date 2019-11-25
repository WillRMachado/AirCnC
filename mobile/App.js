import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

import Routes from './src/routes'


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
export default function App() {
  return  <Routes />

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
