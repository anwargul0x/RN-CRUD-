import React  from 'react';
import {View, TextInput,StyleSheet} from 'react-native';
import {InputStyle} from './InputStyle';

 const Input = ({ textValue, _placeholder, _onChangeText,}) => {
return(
    <View
        style={InputStyle.view}>
     <TextInput
                    value={textValue}
                    placeholder = {_placeholder}
                    onChangeText = {_onChangeText}/>
    </View>
);
};
export default Input;