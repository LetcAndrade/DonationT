import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {styles} from '../assets/css/styles';

// pagina de Cadastro OK

export default function Principal({ navigation })
{

 /* const [user,setUser]=useState(null);

    useEffect(()=>{
        async function getUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);


const tipo = user.findOne(tsangue);
if(tipo==='A+')
{
<Image source={require('../assets/aPos.png')}/>
}if (tipo==='A-')
{
<Image source={require('../assets/aNeg.png')}/>
}if(tipo==='B+')
{
<Image source={require('../assets/bPos.png')}/>
}if(tipo==='B-')
{
<Image source={require('../assets/bNeg.png')}/>
}if (tipo==='O-')
{
<Image source={require('../assets/oNeg.png')}/>
}if(tipo==='O+')
{
<Image source={require('../assets/oPos.png')}/>   
}if (tipo==='AB-')
{
<Image source={require('../assets/abNeg.png')}/>
}if(tipo==='AB+')
{
<Image source={require('../assets/abPos.png')}/>   
}*/

  return (
    <View style ={styles.container}>
      <View style = {styles.container2}>

      </View>
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
