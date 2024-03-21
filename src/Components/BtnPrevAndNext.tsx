import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface BtnPrevAndNextProps {
  navigation: () => void;
}

const BtnPrevAndNext = ({navigation}: BtnPrevAndNextProps) => {
  return (
    <View style={styles.btnPrevAndNext}>
      <TouchableOpacity style={styles.btnClick}>
        <Text style={styles.txtBtn}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnClick} onPress={navigation}>
        <Text style={styles.txtBtn}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnPrevAndNext: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
  },
  btnClick: {
    flex: 1,
    padding: 12,
    backgroundColor: '#354187',
    borderRadius: 7,
  },
  txtBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});
export default BtnPrevAndNext;
