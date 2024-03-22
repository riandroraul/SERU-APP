import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProps} from '../types/types';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const NavHeader = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesignIcon name="arrowleft" size={28} color={'#354187'} />
      </TouchableOpacity>
      <Text style={styles.textHeader}>Registrasi Klaim</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textHeader: {fontSize: 19, color: '#354187', fontWeight: 'bold'},
});

export default NavHeader;
