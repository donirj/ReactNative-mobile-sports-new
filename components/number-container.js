import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { colors } from "../constants/colors"; 

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            {/* children aqui es el numero que metemos en input */}
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles =StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})