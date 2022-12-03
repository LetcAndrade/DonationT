import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../assets/css/styles';


//Páginas do app PAGINA 1 OK
export default function Home({ navigation }) 
{
    return (
  
      <View style={[styles.container, styles.container2]}>
        <Image
            source={require('../assets/Untitled2.png')}
            style={{ width: '100%', height: 400, resizeMode: 'contain' }} 
          />
  
        <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('Login')}>
          <Text  style={styles.login_buttonText}>Entrar</Text>
          </TouchableOpacity>
  
      
         <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('Cadastro')}>
          <Text  style={styles.login_buttonText}>Cadastro</Text>
          </TouchableOpacity>
    </View>
    );
  }
  