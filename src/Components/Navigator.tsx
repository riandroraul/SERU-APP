import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screen/Home';
import RegistrasiKlaim1 from '../Screen/RegistrasiKlaim1';

export type RootStackParamList = {
  Home: undefined;
  RegistrasiKlaim1: undefined;
  RegistrasiKlaim2: undefined;
  RegistrasiKlaim3: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="RegistrasiKlaim1"
          component={RegistrasiKlaim1}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
