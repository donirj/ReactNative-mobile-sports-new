import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import Header from '../../../components/header'
import { styles } from './styles';

export default function Login({ navigation }) {

    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                <Header title={'header'}/>
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
                        <Text style={styles.btntext2} title='back to home screen' onPress={() => navigation.navigate('Signin')}>Registro</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button2}>
                        <Text style={styles.btntext2} title='back to home screen' onPress={() => navigation.navigate('Home')}>Atrás</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </>
    )
}
