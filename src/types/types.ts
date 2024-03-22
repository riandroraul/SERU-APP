import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Components/Navigator';

export interface SelectedProvinces {
  _index: number;
  id: string;
  name: string;
}

export interface SelectedRegency {
  _index: number;
  id: string;
  name: string;
  province_id: string;
}

export interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}
