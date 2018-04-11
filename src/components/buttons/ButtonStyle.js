import {StyleSheet} from 'react-native';

//Buttons Background Colors

const Color = {
addBtnBG:'#00c899',
editBtnBG:"#0000DA",
deleteBtnBG:'#FF0000'
};

//Button Styling

const ButtonStyle = StyleSheet.create({
    addButton:{
        padding:10,
        backgroundColor:Color.addBtnBG
    },
    deleteButton:{
        padding:10,
        backgroundColor:Color.deleteBtnBG
    },
    editButton:{
        padding:10,
        backgroundColor:Color.editsBtnBG
    }
});

export default ButtonStyle;