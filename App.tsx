/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { Colors } from './src/themes/colors';
import AppNavigation from './src/routes/AppNavigation';


function App(): JSX.Element {
  return (
    <SafeAreaView style={AppStyles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.white}
      />
      <AppNavigation />
    </SafeAreaView>
  );
}

const AppStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#ffffff" 
  },
});

export default App;
