import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Input from "../../components/input"
import Card from  "../../components/card"
import NumberContainer from "../../components/number-container";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { colors } from "../../constants/colors";
import React from 'react'

export default function Favorite() {
    //state
    const navigation = useNavigation();
    const [age, setAge] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedAge, setSelectedAge] = useState(0)

    const onHandleChange = (text) => {
        setAge(text.replace(/[^0-9]/g, ''))
    }

    //funcion reset
    const onReset = () => {
        setAge('')
        //dismiss the keyboard
        Keyboard.dismiss()
        console.log('ONRESET')
    }

    //funcion confirmar
    const onConfirm = () => {
        //convertir string a entero con parseInt
        const chosenAge = parseInt(age, 10)
        //validamos si es un numero, o si es igual o menor que 0, o si es mayor a 99 
        if(isNaN(chosenAge) || chosenAge <= 0 || chosenAge > 99) return;
        //si cumple la condicion, confirma el numero
        setConfirmed(true)
        //seteamos un estado
        setSelectedAge(chosenAge)
        console.log('ONCONFIRM')
    }

    //si el estado está confimado, voy a mostrar ese componente
    //si no se renderiza nada es por que el estado no se ha confirmado
    const confirmedOutput = () => confirmed && (
                //esta funcion renderiza el componente de confirmedOutPut
                <Card style={styles.summaryContainer}>
                    <NumberContainer style={styles.numberText}>{selectedAge}</NumberContainer>
                </Card>
    )
    
  return (
    
    <ImageBackground 
        source={require('../../data/efectos-positivos_1410x740_crop_center.jpg')}
        style={styles.container4}>
        <View style={styles.inner2}>
            <Text style={styles.title}>YOUR GENDER IS</Text>
            <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Male</Text></TouchableOpacity>

            <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Female</Text></TouchableOpacity>

            <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Set later</Text></TouchableOpacity>

            <View>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>SET YOUR AGE</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType='numeric'
                        maxLength={2}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandleChange(text)}
                        value={age}
                        onSubmitEditing={onConfirm}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Clean"
                            onPress={onReset}
                            color={colors.primary}
                        />
                        <Button
                            title="Confirm"
                            onPress={onConfirm}
                            color={colors.secondary}
                        />
                    </View>
                </Card>
            {/* cuando yo confirme, se va ver ese componente */}
            {confirmedOutput()}
            </View>
            <TouchableOpacity style={styles.button2}
            onPress={() => navigation.navigate('Profile')}
            ><Text style={styles.btntext}>Continue</Text></TouchableOpacity> 
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
    title: {fontSize: 30, color: '#fff', textAlign: 'center'},
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
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
        
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        color: 'white'
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    }
  });
   