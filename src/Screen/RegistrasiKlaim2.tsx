import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {DataContext} from '../Context/DataContext';
import Container from '../Components/Container';
import NavHeader from '../Components/NavHeader';
import {NavigationProps} from '../types/types';
import CustomCard from '../Components/CustomCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardRegis from '../Components/CardRegis';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';

const data2 = [
  {key: 'No. Polisi', value: 'B 1234 EFG'},
  {key: 'Nama Tertanggung', value: 'Fajar Priyadi'},
  {key: 'No. Poks', value: 'VCL2007001'},
];

const RegistrasiKlaim2 = ({navigation}: NavigationProps) => {
  const {data, setData} = useContext(DataContext);
  console.log('klaim2: ', data);

  return (
    <Container>
      <NavHeader navigation={navigation} />
      <CustomCard
        title="Foto SIM & STNK"
        icon1={
          <MaterialCommunityIcons
            name="card-account-details-outline"
            size={50}
            color={'#000'}
          />
        }
        icon2={<MaterialCommunityIcons name="car" size={50} color={'#000'} />}
      />
      <View style={styles.cardRegisWrapper}>
        {data2.map((item, index) => (
          <CardRegis key={index} keyObj={item.key} value={item.value} />
        ))}
      </View>
      <View>
        <Text style={styles.txtFotoSim}>Foto SIM</Text>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMwxBJMIl12j0QCRpTLyQldetele3A-VDmeohFM6T4aiPUeqmTcADYKWFKA&s',
            }}
          />
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'red',
              opacity: 0.4,
              top: 0,

              right: 0,
              position: 'absolute',
            }}></View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardRegisWrapper: {
    borderWidth: 0.4,
    gap: 12,
    padding: 35,
    borderRadius: 5,
    marginVertical: 14,
  },
  txtFotoSim: {
    fontSize: 15,
    color: '#354187',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageView: {flex: 1},
  image: {width: '100%', height: 200, borderRadius: 10},
});

export default RegistrasiKlaim2;
