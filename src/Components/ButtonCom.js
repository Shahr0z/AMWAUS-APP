import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../styles/colors';

const ButtonCom = ({
    btnText = 'Default Value',
    onPress = () => {},
    btnStyle = {}
}) => {
    return (
        <View>
            <TouchableOpacity 
            style={{...styles.btnStyle,...btnStyle}} 
            activeOpacity={0.7}
            onPress={onPress}
            >
                <Text style={styles.textStyle}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.themeSecondary,
        borderRadius: 10,
        height: 52,
        borderColor: 'black',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      }
})

export default ButtonCom;
