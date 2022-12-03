import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {styles} from '../assets/css/styles';
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Cadastro()
{
  // pagina de Cadastro OK
  const [name,setName]=useState(null);
  const [cpf,setCpf]=useState(null);
  const [data,setData]=useState(null);
  const [celular,setCelular]=useState(null);
  const [peso,setPeso]=useState(null);
  const [sexo,setSexo]=useState(null);
  const [senha,setSenha]=useState(null);
  const [tsangue,setTsangue]=useState(null);
  const [message,setMessage]=useState(null);

  //Envia os dados do formulário para o backend
  async function registerUser()
 { 

     let reqs = await fetch('http://192.168.0.118:3000/create',{
          method: 'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify({
              nameUser: name,
              cpfUser: cpf,
              dataUser: data,
              celularUser: celular,
              pesoUser: peso,
              sexoUser: sexo,
              senhaUser: senha,
              tsangueUser: tsangue
          })
      });
      let ress=await reqs.json();
      setMessage(ress)
      alert('O usuário foi cadastrado com sucesso!')
  
  }

  

  return (
    <ScrollView>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={[styles.imagCad,styles.container]}>
    <View >
     <Image source={ require ( '../assets/Untitled2.png')} 
      style={{height: 130, resizeMode: 'contain' }} />
    </View>
    
    <View style={styles.login_form}>
    <TextInput style={styles.login_input} placeholder=' Nome' onChangeText={(text)=>setName(text)} keyBoardType={'numeric'}/>
    <TextInput style={styles.login_input} placeholder=' CPF' onChangeText={(text)=>setCpf(text)}/>
    <TextInput style={styles.login_input} placeholder=' Data de Nascimento' onChangeText={(text)=>setData(text)}/>
    <TextInput style={styles.login_input} placeholder=' Celular' onChangeText={(text)=>setCelular(text)}/>
    <TextInput style={styles.login_input} placeholder='Peso' onChangeText={(text)=>setPeso(text)}/>
    <TextInput style={styles.login_input} placeholder='Sexo' onChangeText={(text)=>setSexo(text)}/>
    <TextInput style={styles.login_input} placeholder='Tipo Sanguíneo' onChangeText={(text)=>setTsangue(text)}/>
    <TextInput style={styles.login_input} placeholder=' Senha' secureTextEntry = {true} onChangeText={(text)=>setSenha(text)}/>
    <TouchableOpacity style={styles.login_button}>
        <Text style={styles.login_buttonText} onPress={registerUser}>Cadastrar</Text>
    </TouchableOpacity>
    </View> 
   </KeyboardAvoidingView>
   </ScrollView>
  );

}