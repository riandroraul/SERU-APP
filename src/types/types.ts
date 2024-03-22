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
