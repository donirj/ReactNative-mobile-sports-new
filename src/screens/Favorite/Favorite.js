import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Input from "../../../components/input"
import Card from  "../../../components/card"
import NumberContainer from "../../../components/number-container";
import { useState } from 'react';
import { colors } from "../../../constants/colors";
import React from 'react'
import { styles } from './styles';

export default function Favorite({ navigation }) {
    //state
    const [age, setAge] = useState('')
    //estado adicional para setear la edad
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
        //limpiamos el estado 
        setConfirmed(false)
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
                    <TouchableOpacity style={styles.button2}
                        onPress={legalAge()}
                        ><Text style={styles.btntext}>Continue</Text>
                    </TouchableOpacity> 
                </Card>
    )

    const legalAge = () => {
        //convertir string a entero con parseInt
        //parseInt convierte un argumento de string en un entero
        const chosenAge = parseInt(age, 10)
        if(chosenAge > 18 ){
            navigation.navigate('Profile')
        } else {
            null
            Alert.alert('Error', 'Debes ser mayor de edad para poder continuar', [{text: 'ok', style: 'cancel'}])
        }
    }
    
  return (
    
    <ImageBackground 
        source={require('../../../data/efectos-positivos_1410x740_crop_center.jpg')}
        style={styles.container4}>
        <View style={styles.inner2}>
            <Text style={styles.title}>YOUR GENDER IS</Text>
            <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Male</Text></TouchableOpacity>

            <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Female</Text></TouchableOpacity>

            {/* <TouchableOpacity title="Entrar" style={styles.button} 
                ><Text style={styles.btntext}>Set later</Text></TouchableOpacity> */}

            <View>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>SET YOUR AGE</Text>
                    {/* <Text style={styles.subtitle}>You must be 18 or older</Text> */}
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
            {/* <TouchableOpacity style={styles.button2}
            onPress={() => navigation.navigate('Profile')}
            ><Text style={styles.btntext}>Continue</Text></TouchableOpacity>  */}
        </View>
    </ImageBackground>
  )
}

