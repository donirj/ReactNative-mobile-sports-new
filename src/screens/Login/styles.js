import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b497d3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        backgroundColor: 'black',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    button2: {
        backgroundColor: '#fff',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    btntext1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    btntext2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 25,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        borderRadius: 10,
        borderRadius: 10,
        width: 300
      }
})