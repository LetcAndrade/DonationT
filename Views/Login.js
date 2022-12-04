import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../assets/css/styles';

export default function Login({ navigation }) {

  const [display, setDisplay] = useState('none');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);


  async function sendForm() {
    var json
    try {
      let response = await fetch('http://192.168.0.118:3000/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cpf: user,
            senha: password
          })
        });

      json = await response.json();
    } catch (error) {
      alert('Ocorreu um erro, por favor tente novamente mais tarde')
      navigation.navigate('Principal');
    }

    if (json === 'error') {
      setDisplay('flex');
      setTimeout(() => { setDisplay('none'); }, 2000);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('Principal');
    }

  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container2, styles.darkbg]}>
      <View >
        <Image source={require('../assets/Untitled2.png')}
          style={{ height: 300, resizeMode: 'contain' }} />
      </View>

      <View>
        <Text style={styles.login_msg(display)}> CPF ou Senha Inválidos!</Text>
      </View>

      <View style={styles.login_form}>
        <TextInput style={styles.login_input} placeholder=' CPF' onChangeText={text => setUser(text)} />
        <TextInput style={styles.login_input} placeholder=' Senha' onChangeText={text => setPassword(text)} secureTextEntry={true} />
        <TouchableOpacity style={styles.login_button} onPress={sendForm}>
          <Text style={styles.login_buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

