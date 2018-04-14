import {StyleSheet} from 'react-native';

//Buttons Background Colors

export const Color = {
addBtnBG:'#000',
editBtnBG:"#0000DA",
deleteBtnBG:'#FF0000'
};

//Button Styling

const ButtonStyle = StyleSheet.create({
    customFont:{
        fontFamily:'Rubik-Regular',
        color:"#FFF"
    },
    addButton:{
        padding:10,
        backgroundColor:Color.addBtnBG,
        alignItems: 'center',
        width:"30%",
        borderRadius:3,


    },
    deleteButton:{
        padding:10,
        alignItems: 'center',
        backgroundColor:'#FF0000',
        width:"30%",
        borderRadius:3,


    },
    updateButton:{
        padding:10,
        alignItems: 'center',
        backgroundColor:Color.editBtnBG,
        width:"30%",
        borderRadius:3,

    }
});

export default ButtonStyle;