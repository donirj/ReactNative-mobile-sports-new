import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {

    //state
    const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title3}>ÚNETE A LA LIGA DEL MOVIMIENTO</Text>
                <Text style={styles.title3} >Crea tu cuenta y empieza a romper tus límites</Text>
            </View>            
            <TextInput 
            style={styles.input2}
            placeholder="email adress"
                keyboardType="email-address"
                placeholderTextColor="white"
            />
            <TextInput 
            style={styles.input2}
            placeholder="Password"
            keyboardType="default"
            placeholderTextColor="white"
            />
            <TextInput 
            style={styles.input2}
            placeholder="Confirm password"
            keyboardType="default"
            placeholderTextColor="white"
            />
            <TextInput 
            style={styles.input2}
            placeholder="First name"
            keyboardType="default"
            placeholderTextColor="white"
            />
            <TextInput 
            style={styles.input2}
            placeholder="Last name"
            keyboardType="default"
            placeholderTextColor="white"
            />
            <View style={styles.textContainer2}>
                <Text style={styles.subtitle3}>Registra tu fecha de nacimiento para recibir un regalo de todos tus cumpleaños</Text>
            </View>
            <TextInput style={styles.input2}
            placeholder="DD/MM/YYYY"
            keyboardType="numeric"
            placeholderTextColor="white"
            />
            <View style={styles.container5}>
                <TouchableOpacity title="Únete" style={styles.button3}
                    onPress={() => navigation.navigate('Prepare')}>
                    <Text style={styles.btntext2}>Únete</Text>
                </TouchableOpacity>

                <TouchableOpacity title="Atrás" style={styles.button2}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btntext}>Atrás</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#b497d3',
    },
    innerContainer :{
        width: '70%',
        marginTop: 10
    },
    textContainer: {
        width: '85%'
    },
    textContainer2: {
        width: '80%'
    },
    title3: {fontSize: 22, color: '#fff', width: '90%', textAlign: 'center'},
    subtitle3: {fontSize: 17, color: 'black', width: '90%', textAlign: 'center'},
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        borderRadius: 10,
        width: '70%'
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%'
    },
    button3: {
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
})