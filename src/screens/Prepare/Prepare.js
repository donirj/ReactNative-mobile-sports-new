import {KeyboardAvoidingView, Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react'
import { styles } from './styles';

export default function Prepare({ navigation }) {
    
  return (

    <ImageBackground 
        source={require('../../../data/efectos-positivos_1410x740_crop_center.jpg')}
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
