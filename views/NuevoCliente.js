import React,{useState} from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {Button, TextInput,Headline} from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

    const [nombre, setnombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [empresa, setEmpresa] = useState('');

    const guardarCliente=()=>{
        // console.log('guardando c');
        // validar
        if(nombre===''|| telefono===''||correo===''||empresa===''){
            console.log('campos vacios');
            return;
        }
        console.log('guardado');
        // generar
        // save 
        // Rediraect
        // clear form
    }
        
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.titulo}>Añadir nuevo cliente</Headline>
            <TextInput
            label='Nombre'
            placeholder='Esteban'
            onChangeText={(text)=>setnombre(text)}
            style={styles.input}
            underlineColor='#fff'
            value={nombre}
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Telefono'
            placeholder="+543512694707"
            style={styles.input}
            onChangeText={(text)=>setTelefono(text)}
            underlineColor='#fff'
            value={telefono}
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Correo'
            placeholder="example@mail.com"
            style={styles.input}
            onChangeText={(text)=>setCorreo(text)}
            underlineColor='#fff'
            value={correo}
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <TextInput
            label='Empresa'
            placeholder="Nombre de la empresa"
            style={styles.input}
            onChangeText={(text)=>setEmpresa(text)}
            value={empresa}
            underlineColor='#fff'
            theme={{colors: {text: '#323232', primary: "#1774F2"}}}
            />
            <Button icon="pencil-circle" mode="contained" onPress={()=>guardarCliente()}>
                Guardar Cliente
            </Button>
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