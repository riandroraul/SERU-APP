import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {padding: 23, flex: 1, backgroundColor: '#fff', gap: 10},
});
export default Container;
