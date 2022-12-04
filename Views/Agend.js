import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage} from '@react-native-async-storage/async-storage';
import {styles} from '../assets/css/styles';

// pagina de Cadastro OK

export default function Agend()
{
 // pagina de Cadastro OK
 const [horarioAgend,setHorarioAgend]=useState(null);
 const [dataAgendamento,setDataAgendamento]=useState(null);

 //Envia os dados do formulário para o backend
 async function preagend()
{ 

    let reqs = await fetch('http://192.168.0.118:3000/create',{
         method: 'POST',
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
         },
         body: JSON.stringify({
         horarioAgendUser: horarioAgend,
         dataAgendamentoUser:dataAgendamento
         })
     });
     
     let ress=await reqs.json();
     setMessage(ress)
     alert('Pré-agendamento foi feito! Entraremos em contato no número cadastrado para confirmar seu horário :)')
 
 }

 
return (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={[styles.imagCad,styles.container]}>
  <View >
   <Image source={ require ( '../assets/agend.png')} 
    style={{height: 130, resizeMode: 'contain' }} />
  </View>
  
  <View style={styles.login_form}>
  <TextInput style={styles.login_input} placeholder=' Data para Doação'onChangeText={(text)=>setDataAgendamento(text)}/>
  <TextInput style={styles.login_input} placeholder=' Horário para Doação'onChangeText={(text)=>setHorarioAgend(text)}/>
  <Text> *Lembrando que o horário de doação é de acordo com o horário de funcionamento do hemocentro!*</Text>
  <TouchableOpacity style={styles.login_button}>
      <Text style={styles.login_buttonText} onPress={preagend}>Enviar Pré-Agendamento</Text>
  </TouchableOpacity>
  </View> 
 </KeyboardAvoidingView>
  );
}