import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import ButtonCom from '../Components/ButtonCom';
import TextInputCom from '../Components/TextInputCom';
import colors from '../styles/colors';
import values from '../styles/values';

function MainScreen({navigation}) {
    const [name, setName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        //     style={styles.container}
        // >
        //     <SafeAreaView style={{ flex: 1 }}>
        //         <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        //             <View style={{ flex: 1, justifyContent: 'space-between' }}>
        //                 <View>
        //                     <Text>AMWAUS</Text>
        //                     <TextInputCom
        //                         value={name}
        //                         onChangeText={(value) => setName(value)}
        //                         inputStyle={{ borderRadius: 0 }}
        //                         placeholder="Enter Your Email"
        //                         keyboardType='name-phone-pad' />
        //                     <TextInputCom
        //                         value={name}
        //                         onChangeText={(value) => setName(value)}
        //                         inputStyle={{ borderRadius: 0 }}
        //                         placeholder="Enter Your Password" />
        //                 </View>
        //                 <View>
        //                     <ButtonCom
        //                         btnText='Submit'
        //                         onPress={() => { alert(name) }}
        //                         btnStyle={{ backgroundColor: 'red', borderRadius: 5, borderColor: 'black' , paddingBotttom:5}}
        //                     />
        //                 </View>
        //             </View>
        //         </TouchableWithoutFeedback>
        //     </SafeAreaView>
        // </KeyboardAvoidingView>
        <SafeAreaView style={styles.container}>
            <View style={styles.btnCenter}>
                <ButtonCom
                    btnText='Find Jobs'
                    btnStyle={{ padding: 10, }}
                    onPress={() => { navigation.navigate('AuthLogin') }} />
                <ButtonCom
                    btnText='Become a Provider'
                    btnStyle={{ padding: 10, }}
                    onPress={() => { alert('Become a provider') }} />
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'silver'
    },
    btnCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MainScreen;
