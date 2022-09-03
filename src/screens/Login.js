import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

export default function Login() {
    //state

    const navigation = useNavigation();
    
    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                <TextInput  style={styles.input}
                placeholderTextColor="white"
                placeholder="Email"
                //seteamos el email

                    keyboardType="default"
                />
                <TextInput  style={styles.input}
                placeholderTextColor="white"
                placeholder="Password"
                //seteamos password

                secureTextEntry
                    keyboardType="default"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button1}

                        >
                        <Text style={styles.btntext1} title='go to profile screen' onPress={() => {}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button2}

                        >
                        <Text style={styles.btntext2} title='back to home screen'>Registro</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button2}>
                        <Text style={styles.btntext2} title='back to home screen' onPress={() => navigation.navigate('Home')}>Atrás</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b497d3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: 'black',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    button2: {
        backgroundColor: '#fff',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    btntext1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    btntext2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 25,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        borderRadius: 10,
        borderRadius: 10,
        width: 300
      }
})