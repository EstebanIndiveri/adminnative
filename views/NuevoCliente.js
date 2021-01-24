import React,{useState} from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {Button, TextInput,Headline} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {
    const onHandleText=()=>{
        console.log('Escribiendo');
    }
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.titulo}>Añadir nuevo cliente</Headline>
            <TextInput
            label='Nombre'
            placeholder='Esteban'
            onChangeText={()=>onHandleText()}
            style={styles.input}
            underlineColor='#fff'
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Telefono'
            placeholder="+543512694707"
            style={styles.input}
            underlineColor='#fff'
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Correo'
            placeholder="example@mail.com"
            style={styles.input}
            underlineColor='#fff'
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Empresa'
            placeholder="Nombre de la empresa"
            style={styles.input}
            underlineColor='#fff'
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            
        </View>
     );
}
const styles=StyleSheet.create({
    input:{
        marginBottom:20,
        backgroundColor:'transparent',
    }
})
 
export default NuevoCliente;