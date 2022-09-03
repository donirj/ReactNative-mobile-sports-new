
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground} from 'react-native';

export default function Profile() {
    const navigation = useNavigation();
  return (
    <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.btntext2} title='back to home screen' onPress={() => navigation.navigate('Home')}>Home</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})