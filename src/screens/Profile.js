
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground} from 'react-native';

export default function Profile() {
    const navigation = useNavigation();
  return (
    <>
   <ImageBackground 
        source={require('../../data/andoninevado.jpeg')}
        style={styles.container4}>
        <View style={styles.inner}>
            <View style={styles.container6}>
                <Text style={styles.title1}>Andoni Resendiz</Text>
                <Image
                style={{width: 50, height: 50}}
                source={require('../../data/andoni foto.png')} />
            </View>
            <Text style={styles.title2}>DONIRJ</Text>

            <Text style={styles.title1}>Favorite sport</Text>
            <TextInput 
            style={styles.title1}
            placeholder="Futbol"
            keyboardType="default"
            />
            <TouchableOpacity title="Atrás" style={styles.button2}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btntext2}>Home</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </>
  )
}


const styles = StyleSheet.create({
    container4: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button2: {
        backgroundColor: 'black',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    btntext2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    inner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        justifyContent: 'center', 
        alignItems: 'center'
       
    },
    container6: {
        flexDirection: 'row'  
    },
    title1: {fontSize: 30, color: 'black'},
    title2: {fontSize: 40, color: 'black'},
    btntext2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    }
})