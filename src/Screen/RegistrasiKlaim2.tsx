import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import {DataContext} from '../Context/DataContext';
import Container from '../Components/Container';
import NavHeader from '../Components/NavHeader';
import {NavigationProps} from '../types/types';
import CustomCard from '../Components/CustomCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import CardRegis from '../Components/CardRegis';
import BtnPrevAndNext from '../Components/BtnPrevAndNext';

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
      <ScrollView>
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
        <View style={{position: 'relative'}}>
          <Text style={styles.textTitle}>Foto SIM</Text>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMwxBJMIl12j0QCRpTLyQldetele3A-VDmeohFM6T4aiPUeqmTcADYKWFKA&s',
              }}
            />
            <TouchableOpacity style={styles.btnDelete}>
              <AntDesignIcons
                style={styles.iconDelete}
                size={27}
                name="delete"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textNotice}>
            * Data pada SIM harus terlihat jelas
          </Text>
          <Text style={styles.textTitle}>Foto STNK</Text>
        </View>
        <View style={styles.cardUploadDocs}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <AntDesignIcons color={'#354187'} name="pluscircleo" size={40} />
          </TouchableOpacity>
          <Text style={{textAlign: 'center', paddingTop: 10}}>
            Upload Foto STNK
          </Text>
        </View>
        <Text style={styles.textNotice}>
          * Data pada STNK harus terlihat jelas
        </Text>
        <Text style={styles.textTitle}>Foto KTP Tertanggung</Text>
        <View style={styles.cardUploadDocs}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <AntDesignIcons color={'#354187'} name="pluscircleo" size={40} />
          </TouchableOpacity>
          <Text style={{textAlign: 'center', paddingTop: 10}}>
            Upload Foto STNK
          </Text>
        </View>
        <Text style={styles.textNotice}>
          * Data pada KTP Tertanggung harus terlihat jelas
        </Text>
        <BtnPrevAndNext
          navigation={() => navigation.navigate('RegistrasiKlaim3')}
        />
      </ScrollView>
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
  iconDelete: {
    color: 'white',
    position: 'relative',
    zIndex: 999,
  },
  btnDelete: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    opacity: 0.3,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardUploadDocs: {
    borderWidth: 0.4,
    gap: 8,
    padding: 35,
    borderRadius: 5,
  },
  textTitle: {
    fontSize: 15,
    color: '#354187',
    fontWeight: 'bold',
    marginTop: 13,
    marginBottom: 15,
  },
  image: {width: '100%', height: 200, borderRadius: 10},
  textNotice: {
    color: '#354187',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 20,
  },
});

export default RegistrasiKlaim2;
