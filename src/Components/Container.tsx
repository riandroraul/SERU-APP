import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 23,
    paddingTop: 23,
    paddingRight: 23,
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
    marginBottom: 15,
  },
});
export default Container;
