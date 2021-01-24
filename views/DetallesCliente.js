import React from 'react';
import { StyleSheet, View,Alert} from 'react-native';
import {Headline,Text,Button,FAB} from 'react-native-paper'
import globalStyles from '../styles/global';
import axios from 'axios';
const DetallesCliente = ({navigation,route}) => {

    const{nombre,telefono,correo,empresa,id}=route.params.item;
    const {setConsultarAPI}=route.params;

    const mostrarConfirmacion=()=>{
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [
                {text:'Si, Eliminar',onPress:()=>eliminarContacto()},
                {text:'No, cancelar',style:'cancel'}
            ]
        )
    }
    const eliminarContacto=async()=>{
        // console.log('eliminando');
        const url=`http://192.168.0.49:3000/clientes/${id}`
        console.log(url);
        try {
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }
        // redirect
        navigation.navigate('Inicio');
        // consultar api
        setConsultarAPI(true);
    }

    return ( 
        <View style={globalStyles.container}>
            
        <Headline style={globalStyles.titulo}>{nombre}</Headline>
        <Text style={styles.texto}>Empresa: {empresa}</Text>
        <Text style={styles.texto}>Correo: {correo}</Text>
        <Text style={styles.texto}>empresa: {empresa}</Text>
        <Button style={styles.btnDelete}  mode="contained" icon="cancel" onPress={()=>mostrarConfirmacion()}>
            Eliminar Cliente
        </Button>
        <FAB
        style={globalStyles.fab}
        icon='pencil'
        onPress={()=>navigation.navigate('NuevoCliente',{cliente:route.params.item})}
        />
        </View>
     );
}
const styles=StyleSheet.create({
    texto:{
        marginBottom:20,
        fontSize:18
    },
    btnDelete:{
        marginTop:100,
        backgroundColor:'red',
        fontWeight:'bold'
    }
})
 
export default DetallesCliente;