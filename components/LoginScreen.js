import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase.js';

const LoginScreen = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home')
            }
        })
        return unsubscribe
    }, [])


    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email)
            })
            .catch(error => {
                alert(error.message)
            })
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email)
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'>
            <View style={styles.inputContainer}>
                {/*Email Input */}
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setMail(text)}
                    style={styles.input}

                >
                </TextInput>
                {/*Password Input */}
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry>
                </TextInput>
            </View>
            {/*Button Login */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity='0.8'
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.loginButton}>Login</Text>
                </TouchableOpacity>

            </View>
            {/*Button Register*/}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity='0.8'
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.registerButton}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    inputContainer: {
        width: '80%',

    },
    input: {
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#ffff'
    },
    registerButton: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0782F9',
        paddingHorizontal: 80,
        backgroundColor: '#ffff',
        paddingVertical: 10,

    },
    loginButton: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0782F9',
        width: 200,
        paddingHorizontal: 80,
        paddingVertical: 10,


    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
