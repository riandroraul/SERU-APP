import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../Components/Navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.regKlaim}
        onPress={() => navigation.navigate('RegistrasiKlaim1')}>
        <Text style={styles.text}>Registrasi Klaim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: '#fff', fontSize: 20},
  regKlaim: {
    backgroundColor: '#445ef2',
    padding: 10,
    borderRadius: 5,
  },
});

export default Home;
