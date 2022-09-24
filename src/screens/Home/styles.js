import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        backgroundColor: '#fff',
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
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
})