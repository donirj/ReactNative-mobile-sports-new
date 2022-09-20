import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function Prepare() {
    const navigation = useNavigation();
    
  return (

    <ImageBackground 
        source={require('../../data/efectos-positivos_1410x740_crop_center.jpg')}
        style={styles.container4}>
        <View style={styles.inner2}>
            <Text style={styles.title}>FIRST HELP US PREPARE YOUR EXPERIENCE</Text>
            <TouchableOpacity style={styles.button2} title="Continue"
            onPress={() => navigation.navigate('Favorite')}>
                <Text style={styles.btntext}>Continue</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    container4: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inner2: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title: {fontSize: 30, color: '#fff', textAlign: 'center', fontFamily: 'Lato-Bold'},
    button2: {
        backgroundColor: 'white',
        opacity: 0.6,
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    btntext: {
        color: 'black',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    }
  });
  