import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {styles} from '../assets/css/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


export default function Principal({ navigation })
{

    const [user,setUser]=useState(null);
    const [tsangue,setTsangue]=useState(null);
    const [id,setId]=useState(null);
    const [jsonResponse,setJsonResponse]= useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);

        }

        async function getTsangue()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setTsangue(json.tsangue)
        }
        async function getId()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setId(json.id)
        }

        async function getJsonResponse()
        {
          let response= await fetch (`http://192.168.0.118:3000/get-all-donate/${id}`,
          {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          });
          jsonResponse = await response.json();
          console.log(jsonResponse)
          setJsonResponse(jsonResponse)
        }
        getUser();
        getTsangue();
        getId();
        getJsonResponse();
    },[]);

   
  
  return (
    <View style ={styles.container}>
      <View style = {styles.container2}>
       <Text style={styles.Perg}>Olá, {user}!</Text>
       <Image source={require('../assets/banco.png')}  
                style={{ resizeMode: "contain", height: 200, width: 400}}/>
       </View>
       <Text style={styles.Sangue}>{tsangue}</Text>
       <Image source={require('../assets/principal.png')}  
                style={{ resizeMode: "contain", height: 200, width: 400}}/>
       <Text style = {styles.ajud}>Total de pessoas ajudadas: {jsonResponse}</Text>
       <Text style = {styles.ajud}>Total de doação realizada: {jsonResponse}</Text>
     <View style={styles.containerPos}>
            <TouchableOpacity style={styles.button__home} onPress={() => navigation.navigate('Inf')}>
                <Image source={require('../assets/inf.png')}  
                style={{ resizeMode: "contain", height: 100, width: 70}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button__home} onPress={() => navigation.navigate('Agend')}>
                <Image source={require('../assets/agend.png')}
                style={{ resizeMode: "contain", height: 100, width: 100}} />
            </TouchableOpacity>
        </View>
      </View>
      
  );
}
