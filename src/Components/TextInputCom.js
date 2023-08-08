import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';

const TextInputCom = ({
    value = 'Enter Text',
    onChangeText = () =>{},
    inputStyle = {},
    placeholder = 'Placeholder',
    keyboardType = 'name-phone-pad',
    secureTextEntry = false,
}) => {
    return (
        <View>
            <TextInput
                style={{...styles.InputStyles,...inputStyle}} 
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputStyles: {
        backgroundColor: colors.themeColor,
        height: 42,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 10,
        marginBottom: 16,
      },
})

export default TextInputCom;
