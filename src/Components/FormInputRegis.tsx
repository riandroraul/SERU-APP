import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import TextInputComp from './TextInputComp';
import {DataContext} from '../Context/DataContext';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';

const FormInputRegis = () => {
  const {data, setData}: any = React.useContext(DataContext);
  const [provinces, setProvinces] = React.useState([]);
  const [regencies, setRegencies] = React.useState([]);
  const [selectedProvince, setSelectedProvince]: any = React.useState({});
  const [selectedRegencies, setSelectedRegencies] = React.useState({});

  useEffect(() => {
    axios
      .get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((res: any) => {
        console.log(provinces.length);
        setProvinces(res.data);
      });
    if (provinces.length !== 0) {
      axios
        .get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince.id}.json`,
        )
        .then((res: any) => {
          setRegencies(res.data);
        })
        .catch(err => console.log(err));
    }
    console.log(31, data.provinces);
  }, []);

  const data2 = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  return (
    <View style={styles.formWrapper}>
      <TextInputComp
        placeholder="First Name"
        defaultValue={data.firstName}
        onChangeText={(text: string) => setData({...data, firstName: text})}
      />
      <TextInputComp
        placeholder="Last Name"
        defaultValue={data.lastname}
        onChangeText={(text: string) => setData({...data, lastName: text})}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      <Dropdown
        style={styles.dropdown}
        data={provinces}
        labelField="name"
        valueField="id"
        value={selectedProvince}
        onChange={(item: any) => {
          setSelectedProvince(item);
          setData({...data, provinces: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      {/* {provinces && (
        <Dropdown
          style={styles.dropdown}
          data={regencies}
          labelField="name"
          valueField="id"
          value={selectedRegencies}
          onChange={(item: any) => {
            console.log(item);
            setSelectedRegencies(item);
            setData({...data, provinces: item.name});
          }}
          search
          placeholder="Select Regencies"
          placeholderStyle={styles.placeholderStyle}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    borderWidth: 0.4,
    padding: 15,
    borderRadius: 5,
    marginVertical: 14,
  },
  dropdown: {
    marginLeft: 12,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  placeholderStyle: {
    fontSize: 15,
  },
});
export default FormInputRegis;
