import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

interface TextInputProps {
  placeholder: string;
  defaultValue: string;
  onChangeText: (text: string) => void;
}

const TextInputComp = ({
  placeholder,
  onChangeText,
  defaultValue,
}: TextInputProps) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderBottomWidth: focus ? 2 : 0,
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        onEndEditing={() => setFocus(false)}
        onFocus={() => setFocus(true)}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: '#354187',
    padding: 10,
    fontSize: 15,
  },
});

export default TextInputComp;
