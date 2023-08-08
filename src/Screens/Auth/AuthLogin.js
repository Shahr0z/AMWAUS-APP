import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Button,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import ButtonCom from '../../Components/ButtonCom';
import TextInputCom from '../../Components/TextInputCom';
import CheckBox from '@react-native-community/checkbox';

import colors from '../../styles/colors';
import values from '../../styles/values';

function LoginScreen({ navigation }) {
    const [name, setName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [selection, setSelection] = useState(false);

    const changeSelection = (() => {
        setSelection(!selection);
    })
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.amwaus}>
                    <Text style={styles.txtamwaus}>AMWAUS</Text>
                    <View style={styles.dont_account} >
                        <Text style={styles.txtLogin}>Login</Text>
                        <Button
                            onPress={() => { navigation.navigate('AuthSignup') }}
                            title="Don't have an account"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={{ alignItems: 'stretch' }}>
                        <TextInputCom
                            value={name}
                            onChangeText={(value) => setName(value)}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your Email"
                            keyboardType={Platform.OS == 'ios' ? 'email-address' : 'email'} />
                        <TextInputCom
                            value={userPassword}
                            onChangeText={(value) => setUserPassword(value)}
                            secureTextEntry={false}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your Password" />
                        <View style={styles.dont_account} >
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={selection}
                                    onValueChange={changeSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Keep me Sign In</Text>
                            </View>
                            <Button
                                onPress={() => { alert('Forgot Password') }}
                                title="Forgot Password"
                                style={styles.btnforgot}
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <ButtonCom
                            btnText='Login'
                            onPress={() => { alert(name) }}
                            btnStyle={{ backgroundColor: colors.themeSecondary, borderRadius: 5, borderColor: 'black', paddingBotttom: 5 }}
                        />

                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.themeWhite,
    },
    amwaus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtamwaus: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 34,
    },
    dont_account: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    txtLogin: {
        marginRight: 34,
        fontSize: 24,
        fontWeight: 'bold',
    },
    txt_dont_account: {
        marginLeft: 34,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },
      btnforgot:{

      }
});

export default LoginScreen;
