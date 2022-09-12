import React from 'react';
import { Modal } from  'react-native'

const CustomModal = ({ children, visible, animationType, onRequestClose }) => {
    return (
        <Modal 
            animationType={animationType}
            visible={visible}
            onRequestClose={onRequestClose}
        >
        {/* voy a renderizar lo que esté dentro del componente del modal en profile*/}
            {children}
        </Modal>
    )
}

export default CustomModal