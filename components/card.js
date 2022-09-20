import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from ".././constants/colors";

const Card = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 5,
    }
})
