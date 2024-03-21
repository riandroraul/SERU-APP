import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomCard from '../Components/CustomCard';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Components/Navigator';
import CardRegis from '../Components/CardRegis';
import FormInputRegis from '../Components/FormInputRegis';
import {ScrollView} from 'react-native';
import BtnPrevAndNext from '../Components/BtnPrevAndNext';

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RegistrasiKlaim1'>;
}

const data = [
  {key: 'No. Polisi', value: 'B 1234 EFG'},
  {key: 'Nama Tertanggung', value: 'Fajar Priyadi'},
  {key: 'No. Poks', value: 'VCL2007001'},
  {key: 'Periode', value: '1 Juli 2020 - 30 Juni 2021'},
  {key: 'Nilai Pertanggungan', value: 'Rp. 120.000.000'},
  {key: 'Buatan/Merk', value: 'Jepang/Honda'},
  {key: 'Tahun Pembuatan', value: '2019'},
  {key: 'No. Mesin', value: 'NHX120000'},
  {key: 'No. Rangka', value: 'MCM24000'},
];

const RegistrasiKlaim1 = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesignIcon name="arrowleft" size={28} color={'#354187'} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Registrasi Klaim</Text>
      </View>
      <ScrollView indicatorStyle="white">
        <CustomCard
          icon1={
            <MaterialComunityIcons
              name="book-edit-outline"
              size={50}
              color={'#000'}
            />
          }
          icon2={
            <MaterialComunityIcons
              name="card-account-details-outline"
              size={50}
              color={'#000'}
            />
          }
          title="Formulir Klaim"
        />
        <View style={styles.detailKlaim}>
          <Text style={styles.detailKlaimText}>
            Resgistrasi Klaim: B 1234 EFG
          </Text>
        </View>
        <View style={styles.cardRegisWrapper}>
          {data.map((item, index) => (
            <CardRegis key={index} keyObj={item.key} value={item.value} />
          ))}
        </View>
        <FormInputRegis />
        <BtnPrevAndNext
          navigation={() => navigation.navigate('RegistrasiKlaim2')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 23, flex: 1, backgroundColor: '#fff', gap: 10},
  text: {color: '#000'},
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textHeader: {fontSize: 19, color: '#354187', fontWeight: 'bold'},
  detailKlaim: {backgroundColor: '#cfd2e8', padding: 5},
  detailKlaimText: {
    textAlign: 'center',
    fontSize: 19,
    color: '#354187',
    fontWeight: 'bold',
  },
  cardRegisWrapper: {
    borderWidth: 0.4,
    padding: 15,
    borderRadius: 5,
    marginVertical: 14,
  },
});

export default RegistrasiKlaim1;
