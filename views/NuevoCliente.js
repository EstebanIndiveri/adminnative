import React,{useState} from 'react';
import { Text,StyleSheet, View } from 'react-native';
import {Button, TextInput,Headline,Paragraph,Dialog,Portal} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = ({navigation}) => {

    const [nombre, setnombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [alerta, setAlerta] = useState(false);

    const guardarCliente=async()=>{
        // console.log('guardando c');
        // validar
        if(nombre===''|| telefono===''||correo===''||empresa===''){
            // console.log('campos vacios');
            setAlerta(true);
            return;
        }
        // console.log('guardado');
        // generar
        const cliente={
            nombre,
            telefono,
            empresa,
            correo
        }
        // save 
        try {
            await axios.post('http://192.168.0.49:3000/clientes',cliente);
            // await axios.post('http://localhost:3000/clientes',cliente);
        } catch (error) {
            console.log(error);
            
        }
        // Rediraect
        navigation.navigate('Inicio');
        // clear form
        setnombre('');
        setTelefono('');
        setCorreo('');
        setEmpresa('');
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
            <Button icon="pencil-circle" mode="contained" style={styles.btnSubmit} onPress={()=>guardarCliente()}>
                Guardar Cliente
            </Button>
            <Portal>
                <Dialog
                onDismiss={()=>setAlerta(false)}
                visible={alerta}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={()=>setAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
     );
}
const styles=StyleSheet.create({
    input:{
        marginBottom:20,
        backgroundColor:'transparent',
    },
    btnSubmit:{
        backgroundColor:'#1774F2',
    }
})
 
export default NuevoCliente;