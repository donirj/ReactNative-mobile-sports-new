import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...style }} />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginVertical: 0,
    }
})