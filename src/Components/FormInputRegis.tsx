import {View, Text, StyleSheet} from 'react-native';
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import TextInputComp from './TextInputComp';
import {DataContext} from '../Context/DataContext';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {SelectedProvinces, SelectedRegency} from '../types/types';

const FormInputRegis = () => {
  const {data, setData}: any = useContext(DataContext);
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [selectedProvince, setSelectedProvince] =
    useState<SelectedProvinces | null>(null);
  const [selectedRegency, setSelectedRegency] =
    useState<SelectedRegency | null>(null);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict]: any = useState(null);
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState(null);

  type CallBackFunction = Dispatch<SetStateAction<never[]>>;
  async function handleChangeDropdown(
    path: string,
    callbackFunc: CallBackFunction,
  ) {
    try {
      const result = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/${path}.json`,
      );
      callbackFunc(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleChangeDropdown('provinces', setProvinces);
    if (selectedProvince) {
      console.log('selectedProvince: ', selectedProvince);
      handleChangeDropdown(`regencies/${selectedProvince.id}`, setRegencies);
      console.log('regencies: ', regencies);
      if (selectedRegency) {
        console.log('selectedRegency: ', selectedRegency);
        handleChangeDropdown(`districts/${selectedRegency.id}`, setDistricts);
        if (selectedDistrict) {
          console.log('districts: ', districts);
          console.log('selectedDistrict: ', selectedDistrict);
          handleChangeDropdown(`villages/${selectedDistrict.id}`, setVillages);
        }
      }
    }
    // console.log('hasown: ', data.hasOwnProperty('regencies'));
  }, [selectedProvince, selectedRegency, selectedDistrict]);

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
          setData({...data, province: item.name});
        }}
        search
        placeholder="Select Province"
        placeholderStyle={styles.placeholderStyle}
      />
      {selectedProvince && (
        <Dropdown
          style={styles.dropdown}
          data={regencies}
          labelField="name"
          valueField="id"
          value={selectedRegency}
          onChange={(item: any) => {
            setSelectedRegency(item);
            setData({...data, regency: item.name});
          }}
          search
          placeholder="Select Regencie"
          placeholderStyle={styles.placeholderStyle}
        />
      )}
      {selectedRegency && (
        <Dropdown
          style={styles.dropdown}
          data={districts}
          labelField="name"
          valueField="id"
          value={selectedDistrict}
          onChange={(item: any) => {
            setSelectedDistrict(item);
            setData({...data, district: item.name});
          }}
          search
          placeholder="Select District"
          placeholderStyle={styles.placeholderStyle}
        />
      )}
      {selectedDistrict && (
        <Dropdown
          style={styles.dropdown}
          data={villages}
          labelField="name"
          valueField="id"
          value={selectedVillage}
          onChange={(item: any) => {
            setSelectedVillage(item);
            setData({...data, village: item.name});
          }}
          search
          placeholder="Select Village"
          placeholderStyle={styles.placeholderStyle}
        />
      )}
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
