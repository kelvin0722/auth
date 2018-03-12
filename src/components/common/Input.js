import { TextInput ,View,Text } from 'react-native';
import React from 'react';

const Input = ({label,value,onChangeText,placeholder,type}) => {
    const {containerStyle,labelStyle,textInputStyle} = styles;
    let inputSegment  = type == 'nonsecure'?  
            <TextInput
            value={value}
            onChangeText ={onChangeText}
            style={textInputStyle}
            underlineColorAndroid = 'transparent'
            placeholder = {placeholder} />:
            <TextInput
            value={value}
            onChangeText ={onChangeText}
            style={textInputStyle}
            underlineColorAndroid = 'transparent'
            placeholder = {placeholder}
            secureTextEntry />
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            {inputSegment}
        </View>
    )
}
 
export default Input;

const styles = {
    containerStyle:{
        flex:1,
        height:40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    },

    textInputStyle:{
        height:20,
        width:100,
        flex: 2,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight:23,
        color:'#000'
    }
}