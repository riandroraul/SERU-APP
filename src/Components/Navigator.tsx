import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screen/Home';
import RegistrasiKlaim1 from '../Screen/RegistrasiKlaim1';
import RegistrasiKlaim2 from '../Screen/RegistrasiKlaim2';
import RegistrasiKlaim3 from '../Screen/RegistrasiKlaim3';
import {DataProvider} from '../Context/DataContext';

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
      <DataProvider>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="RegistrasiKlaim1"
            component={RegistrasiKlaim1}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="RegistrasiKlaim2"
            component={RegistrasiKlaim2}
          />
          <RootStack.Screen
            name="RegistrasiKlaim3"
            component={RegistrasiKlaim3}
          />
        </RootStack.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
};

export default Navigator;
