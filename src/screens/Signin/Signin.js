import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Signin({ navigation }) {

  return (
    <SafeAreaView
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
    </SafeAreaView>
  )
}
