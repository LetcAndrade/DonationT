import React from 'react';
import {Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

// pagina de agendamento OK
export default function Pag7()
{
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={[css.imagCad,css.container]}>
    <View >
     <Image source={ require ( '../assets/agend.png')} 
      style={{height: 130, resizeMode: 'contain' }} />
    </View>
    
    <View style={css.login_form}>
    <TextInput style={css.login_input} placeholder=' Data para Doação'/>
    <TextInput style={css.login_input} placeholder=' Horário para Doação'/>
    <Text> *Lembrando que o horário de doação é de acordo com o horário de funcionamento do hemocentro!*</Text>
    <TouchableOpacity style={css.login_button}>
        <Text style={css.login_buttonText}>Enviar Pré-Agendamento</Text>
    </TouchableOpacity>
    </View> 
   </KeyboardAvoidingView>
  );
}