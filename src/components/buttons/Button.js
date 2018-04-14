import React from 'react';
import { TouchableOpacity , Text } from 'react-native';
import  ButtonStyle  from './ButtonStyle'



export const Button = ({ text , type ,_onPress,flag}) => {
    let{ addButton , deleteButton , updateButton, customFont } = ButtonStyle;
return (
    <TouchableOpacity
        onPress= {_onPress}
        style = {
            type == 'add' ?  addButton
            : type == 'delete' ? deleteButton
            : type == 'edit' ? updateButton   : undefined}>
        <Text style={customFont}>{type.toLowerCase() =='add'?( flag ? 'Edit':'Add' ) : text}</Text>
    </TouchableOpacity>
);
};
