import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login')
            })
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity>
                <Text style={styles.buttonText} onPress={handleSignOut}>Signout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
