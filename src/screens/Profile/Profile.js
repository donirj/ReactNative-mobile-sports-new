
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, FlatList, ImageBackground, Modal} from 'react-native';
import { useState } from 'react';
//importación del modulo
import { CustomModal } from '../../../components/index';
import { styles } from './styles';

export default function Profile({ navigation }) {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
      //array con dos parametros
  //la primera mantiene el valor del estado
  //el segundo es la funcion que actualiza ese estado
  //el coche está apagado
  //el valor se mantiene false porque de entrada no se muestra el modal, si yo interactuo con la x debe mostrarse
    const [modalVisible, setModalVisible] = useState(false)
    //segundo estado, debe estar vacio, si le doy click a la x
    const [selectedTask, setSelectedTask] = useState(null)

    //funcion conectada al onHandle dentro del input
    const onHandleChangeText = (text) => {
        setTask(text)
    }

    
    const addItem = () => {
        // setTask está seteado dentro de useState
        // el task aqui abajo es una copia de nuestro state
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), value: task},
        ]);
        setTask('')
    }

    const onHandleModal = (id) => {
        //aqui activamos el modal, con el inverso de la visibilidad del modal
        //si el modal está en falso y lo clicko, se va hacer verdadero y va mostrarse
        setModalVisible(!modalVisible)
        //con find vamos a iterar la lista y buscar ese valor para retornar el objeto
        //el id seleccionado debe coincidir con el valor que contiene la lista
        //find retorna un objeto
        //seteamos el setSelectedTask
        setSelectedTask(tasks.find((item) => item.id === id))
        console.warn(id)
    }

    //elemento
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
            {/* item.id es el identificador para saber que elemento vamos a borrar */}
            <TouchableOpacity style={styles.button} onPress={() => onHandleModal(item.id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
    //funcion para eliminar elemento del arreglo
    const onHandleDeleteItem = () => {
        //filter para retornar cada uno de los elementos, menos el valor que estoy seleccionando
        setTasks(tasks.filter((item) => item.id !== selectedTask.id))
        //al eliminar ese valor, el selectedTask debe ser null
        setSelectedTask(null)
        setModalVisible(!modalVisible)
    }

  return (
    <>
        <ImageBackground 
            source={require('../../../data/andoninevado.jpeg')}
            style={styles.container4}>
            <View style={styles.inner}>
                <View style={styles.container6}>
                {/* MI NOMBRE */}
                    <Text style={styles.title1}>Andoni Resendiz</Text>
                </View>
                <Text style={styles.title2}>DONIRJ</Text>
            <View style={styles.inputContainer}>
                    <TextInput 
                        //input para el escribir el dato
                            style={styles.title1}
                            placeholder="add your sport here"
                        //evento onHandleChangeText, tiene su funcion en el componente principal
                            onChangeText={onHandleChangeText}
                            value={task}
                            keyboardType="default"
                        />
                        <TouchableOpacity 
                        //onPress ejecuta addItem que ingresa en setTasks el dato setTask(text)
                        title='add sport'
                        onPress={addItem}
                        // onSubmitEditing={() => {
                        //     console.log('HOLA')
                        // }}
                        >
                        <Text style={styles.addBtn}>Add</Text>
                        </TouchableOpacity>

                    {/* render del listado */}
                    {/* <View>
                    render del state guardado en input
                    task es 
                    {tasks.map((item) => (
                            <View key={`item-${item.id}`}>
                                <Text style={styles.item}>{item.value}</Text>
                            </View>
                    ))}
                    </View> */}
                </View>
                {/*  built-in component used to make an efficient scrolling list of data. */}
                {/*  una lista grande puede requerir mas esfuerzo,  flatList permite tener n elementos, y todas las caract de un evento scrolleable, el performance es eficiente, mejor performance, por si los elementos sobrepasan el tamaño de pantalla */}
                <FlatList 
                style={styles.itemList}
                data={tasks}
                //renderItem toma como argumento la funcion de arriba, para renderizar aqui la información de renderItem
                renderItem={renderItem}
                //keyextracto recorre los datos que hemos pasado
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                />
                {/* MODAL */}
                <CustomModal animationType='slide' visible={modalVisible}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Detalle de la lista</Text>
                    </View>
                    <View style={styles.modalMessageContainer}>
                        <Text style={styles.modalMessage}>Estas seguro de que quieres eliminar?</Text>
                    </View>
                    <View style={styles.modalMessageContainer}>
                        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                        style={styles.deleteBtn}
                        //recibe selectedTask?.id para eliminar ese valor
                        onPress={() => onHandleDeleteItem(selectedTask?.id)}
                        >
                            <Text>Eliminar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        //recibe selectedTask?.id para eliminar ese valor
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text>cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </CustomModal>
                {/* button home */}
                <TouchableOpacity title="Atrás" style={styles.button2}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btntext2}>Home</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </>
  )
}

