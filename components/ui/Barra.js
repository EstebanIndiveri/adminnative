import React from 'react';

import { Button } from 'react-native-paper';


const BarraSuperior = ({navigation,route}) => {
    const handlepress=()=>{
        // console.log('crendo cliente')
        navigation.navigate('NuevoCliente');
    }
    

    return ( 
        <Button icon="plus-circle" onPress={()=>handlepress()} color="#FFF">
            Cliente
        </Button>
     );
}
 
export default BarraSuperior;
