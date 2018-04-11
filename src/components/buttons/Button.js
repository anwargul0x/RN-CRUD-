import React from 'react';
import { TouchableOpacity , Text } from 'react-native';
import ButtonStyle from './ButtonStyle'



export default const Button = ({ text , type }) => {
return (
    <TouchableOpacity
        style = {
            type == 'add' ? ButtonStyle.addBtnBG:}>
        <Text>{text}</Text>
    </TouchableOpacity>
);
};
