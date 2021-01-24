import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Easing
} from 'react-native';
import Inicio from './views/Inicio';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
import {DefaultTheme,Provider as PaperProvider} from 'react-native-paper';
import BarraSuperior from './components/ui/Barra';

const Stack=createStackNavigator();

// Definimos el tema
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#1774F2',
    accent:'#0655BF',
  }
};
// console.log(theme.colors.primary);

const App = () => {
  return (
    <>
    <PaperProvider>
    <StatusBar  backgroundColor="transparent" translucent barStyle="light-content"/>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle:{
            backgroundColor:theme.colors.primary,
          },
          headerTintColor:theme.colors.surface,
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          gestureEnabled:true,
          gestureDirection:'horizontal',
          cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
          transitionSpec:{
            open:config,
            close:closeConfig
          },
        }}
        headerMode="float"
        >
          <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={({navigation,route})=>({
            headerLeft:(props)=><BarraSuperior {...props}
            navigation={navigation}
            route={route}
            />
          })}
          />

          <Stack.Screen
          name="NuevoCliente"
          component={NuevoCliente}
          options={{
            title: "Nuevo Cliente",
          }}
          />

          <Stack.Screen
          name="DetalleCliente"
          component={DetallesCliente}
          options={{
            title: "Detalles Cliente",
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});



const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig={
  animation:'timing',
  config:{ 
    // overshootClamping: false,
    duration:200,
    easing:Easing.linear,
  },
};

export default App;
