import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Views/Login';
import Home from './Views/Home';
import Info from './Views/Info';
import Cadastro from './Views/Cadastro';
import Agend from './Views/Agend';
import Principal from './Views/Inicio';


// definição das telas
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Donation Tracker">
        <Stack.Screen name="Donation Tracker" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false}} />
        <Stack.Screen name="Inf" component={Info} options={{headerShown: false}} />
        <Stack.Screen name="Agend" component={Agend} options={{ title: 'Pré-Agendamento'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
