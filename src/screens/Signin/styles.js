import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#b497d3',
    },
    innerContainer :{
        width: '70%',
        marginTop: 10
    },
    textContainer: {
        width: '85%'
    },
    textContainer2: {
        width: '80%'
    },
    title3: {fontSize: 22, color: '#fff', width: '90%', textAlign: 'center', fontFamily: 'Lato-Bold'},
    subtitle3: {fontSize: 16.5, color: 'black', width: '90%', textAlign: 'center', fontFamily: 'Lato-Black'},
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
        borderRadius: 10,
        width: '70%'
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%'
    },
    button3: {
        backgroundColor: 'black',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52
    },
    btntext2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
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
    }
})