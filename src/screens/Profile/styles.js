import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container4: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button2: {
        backgroundColor: 'black',
        padding: 10,
        width: 125,
        borderRadius: 30,
        margin: 10,
        height: 52,
        marginTop: 50
    },
    btntext2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    inner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        justifyContent: 'center', 
        alignItems: 'center'
       
    },
    container6: {
        flexDirection: 'row',
        marginTop: 20
    },
    title1: {fontSize: 20, color: 'black', margin: 10},
    title2: {fontSize: 30, color: 'black', fontWeight: 'bold', marginBottom: 5},
    btntext2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    itemList: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10
    },
    itemContainer: {
        flex: 1,
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#DDDBF1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    item: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    delete: {
        marginLeft: 50,
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    modalMessageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 16
    },
    modalMessage: {
        fontSize: 14,
        justifyContent: 'center'
    },
    addContainer: {
        marginVertical: 10,
        backgroundColor: '#DDDBF1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    addBtn: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    selectedTask: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        margin: 20
    } 
})