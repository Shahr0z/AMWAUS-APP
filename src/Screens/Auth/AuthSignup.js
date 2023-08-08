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

import colors from '../../styles/colors';
import values from '../../styles/values';
import { ScrollView } from 'react-native-gesture-handler';

function LoginScreen({ navigation }) {
    const [fristName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    //validate signup here..
    
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView >
                <View style={styles.amwaus}>
                    <Text style={styles.txtamwaus}>AMWAUS</Text>
                    <View style={styles.dont_account} >
                        <Text style={styles.txtLogin}>SIGNUP</Text>
                        <Button
                            onPress={() => {navigation.navigate('AuthLogin')}}
                            title="Already have an account"
                            color={colors.themeSecondary}
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={{ alignItems: 'stretch' }}>
                        <TextInputCom
                            value={fristName}
                            onChangeText={(value) => setFirstName(value)}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your First Name"
                            keyboardType={Platform.OS == 'ios' ? 'email-address' : 'email'} />
                        <TextInputCom
                            value={lastName}
                            onChangeText={(value) => setLastName(value)}
                            secureTextEntry={false}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your Last Name" />
                            <TextInputCom
                            value={phoneNumber}
                            onChangeText={(value) => setPhoneNumber(value)}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your Phone Number"
                            keyboardType={Platform.OS == 'ios' ? 'email-address' : 'email'} />
                        <TextInputCom
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            secureTextEntry={false}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your E-Mail Address" />
                            <TextInputCom
                            value={userName}
                            onChangeText={(value) => setUserName(value)}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your User Name"
                            keyboardType={Platform.OS == 'ios' ? 'email-address' : 'email'} />
                        <TextInputCom
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={false}
                            inputStyle={{ borderRadius: 10, alignItems: 'stretch', width: 350, backgroundColor: colors.themeWhite }}
                            placeholder="Enter Your Password" />
                            
                        <ButtonCom
                            btnText='SIGNUP'
                            onPress={() => { validateSignup(fristName,lastName,phoneNumber,email,userName,password) }}
                            btnStyle={{ backgroundColor: colors.themeSecondary, borderRadius: 5, borderColor: 'black', paddingBotttom: 5 }}
                        />
                    </View>
                </View>
                </ScrollView>
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
        marginBottom: 50,
    },
    txtLogin: {
        marginRight: 34,
        fontSize: 24,
        fontWeight: 'bold',
    },
    txt_dont_account: {
        marginLeft: 34,
        fontSize: 16,
    }
});

export default LoginScreen;
