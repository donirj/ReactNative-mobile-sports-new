import { StyleSheet } from "react-native"
import {colors} from '../../../constants/colors'

export const styles = StyleSheet.create({
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
    subtitle: {fontSize: 15, color: '#fff', textAlign: 'center'},
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
    },
    summaryContainer: { 
        alignItems: 'center'
    }
  });
   