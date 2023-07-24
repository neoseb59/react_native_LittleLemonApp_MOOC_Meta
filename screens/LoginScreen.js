import React from 'react';
import { ScrollView, Text, StyleSheet, Platform, KeyboardAvoidingView, TextInput, Pressable, useColorScheme } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [login, onChangeLogin] = React.useState(true)
    const colorScheme = useColorScheme()

    const textInputStyle = [
        styles.textInput,
        { color: colorScheme === 'light' ? '#333333' : '#EDEFEE' },
        { backgroundColor: colorScheme === 'light' ? '#EDEFEE' : '#000' },
    ]

    return (
        < KeyboardAvoidingView style={ [
            styles.container,
            { backgroundColor: colorScheme === 'light' ? '#fff' : '#333333' },
        ] } behavior={ Platform.OS === 'ios' ? 'padding' : 'height' } >
            <ScrollView keyboardDismissMode='on-drag' indicatorStyle={ "white" }>
                <Text style={ [
                    styles.headerText,
                    { color: colorScheme === 'light' ? '#333333' : '#EDEFEE' },
                ] }>Welcome to Little Lemon</Text>
                { login && (
                    <><Text style={ [
                        styles.regularText,
                        colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
                    ] }>Login to continue </Text>
                        <TextInput
                            placeholder='email'
                            keyboardType='email-address'
                            style={ textInputStyle }
                            value={ email }
                            onChangeText={ onChangeEmail }
                            clearButtonMode='always'
                        />
                        <TextInput
                            placeholder='Password'
                            value={ password }
                            onChangeText={ onChangePassword }
                            style={ textInputStyle }
                            secureTextEntry
                            clearButtonMode='always'
                        /></>
                )
                }
                { !login && (
                    <Text style={ styles.regularText }>You are log in! </Text>
                )
                }
                <Pressable style={ styles.button } onPress={ () => {
                    // onChangeLogin(cur => !cur)
                    navigation.navigate("Welcome")
                } }>
                    <Text style={ styles.buttonText }>
                        { login ? 'Login' : 'Disconnect' }
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    textInput: {
        margin: 20,
        padding: 20,
        borderRadius: 5
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        borderWidth: 2,
        borderRadius: 12
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
    },
});

