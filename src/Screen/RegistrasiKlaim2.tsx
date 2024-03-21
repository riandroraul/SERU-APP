import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {DataContext} from '../Context/DataContext';

const RegistrasiKlaim2 = () => {
  const {data, setData} = useContext(DataContext);
  console.log('klaim2: ', data);

  return (
    <View>
      <Text>RegistrasiKlaim2</Text>
    </View>
  );
};

export default RegistrasiKlaim2;
