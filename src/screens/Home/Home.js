import * as React from  'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import Header from '../../../components/header'
import { styles } from './styles';

const data = [
    'https://i.im.ge/2022/09/05/O869sq.ciclista.png',
    'https://i.im.ge/2022/09/05/O86UTY.futbol.png',
    'https://i.im.ge/2022/09/05/O86Djh.runner.png'
]

export default function Home({ navigation }) {

    return (
        <>
            <LinearGradient
                colors={['purple', 'white']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <Header title={'header'}/>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} title='go to add screen' onPress={() => navigation.navigate('Signin')}>Únete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} title='go to add screen' onPress={() => navigation.navigate('Login')}>Entrar</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </>
    )
}
