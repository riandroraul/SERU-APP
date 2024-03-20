import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface CardRegisProps {
  keyObj: string;
  value: string;
}

const CardRegis = ({keyObj, value}: CardRegisProps) => {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.wrapKey}>
          <Text style={styles.textKey}>{keyObj}</Text>
        </View>
        <View style={styles.wrapValue}>
          <Text style={styles.textValue}>{value}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  wrapKey: {flex: 0.9},
  textKey: {fontSize: 15, color: '#354187', fontWeight: 'bold'},
  wrapValue: {flex: 1},
  textValue: {fontSize: 15, color: '#000'},
});

export default CardRegis;
