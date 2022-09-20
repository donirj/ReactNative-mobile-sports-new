
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            {/* <Text>{title}</Text> */}
            <Image 
            style={styles.logoHeader}
            source={require('../assets/Motion-League-Logo.png')}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoHeader: {
        height: 50,
        width: 50
    }
})