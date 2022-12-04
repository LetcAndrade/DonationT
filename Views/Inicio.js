import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {styles} from '../assets/css/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Principal({ navigation })
{

    const [user,setUser]=useState(null);
    const [tsangue,setTsangue]=useState(null);

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
        getUser();
        getTsangue();
    },[]);

  return (
    <View style ={styles.container}>
      <View style = {styles.container2}>
       <Text style={styles.Perg}>{user}</Text>
       </View>
       <Text style={styles.Sangue}>{tsangue}</Text>
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
