/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnClick}
        onPress={() => Alert.alert('hello')}>
        <Text style={styles.text}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  btnClick: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});

export default App;
