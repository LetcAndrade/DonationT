import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#FFFFFFF',
      padding: 8,
      
    },
    containerPerg: {
      justifyContent: 'center',
      padding:9
      
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },

    containerPos: {
      backgroundColor: '#FFBEBE',
      height:100,
      flexDirection:'row',
      justifyContent: 'center',
      marginVertical:10,
    },
    container3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin:15
      
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    darkbg:
    {
    backgroundColor: '#F4F4F4'
    },
  
    login_msg: (text= 'none') =>
    ({
      fontWeight: "bold",
      fontSize: 22,
      color: "red",
      marginTop: 10,
      marginBottom: 15,
      display: text
  
    }),
  
    login_input:
    {
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15
    },
  
    login_button:
    {
      backgroundColor: "#CC1100",
      padding: 15,
      alignSelf: "center",
      borderRadius:5,
      marginVertical:13
    },
  
    login_buttonText:
    {
      fontWeight: "bold",
      fontSize: 22,
      color:"#fff"
    },
  
    imagCad:
    {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFFF',
      justifyContent: 'center',
      marginTop:25
  
    },
  
    Inftext:
    {
      fontWeight: "bold",
      fontSize: 15,
      color:"#AF031E",
      alignItems: 'baseline',
      marginTop:5
    },
  
    InftextResp:
    {
      fontWeight: "400",
      fontSize: 15,
      color:"#333",
      alignItems: 'flex-start',
      marginTop:3
    },
    
    Perg:
    {
      fontWeight: 'bold',
      fontSize: 23,
      color:"#AF031E",
      alignItems: 'center'
    },
  
    button__home:
   {
    marginRight:30
   },
   Sangue:
   {
    fontWeight: '700',
    fontSize: 168,
    color:"#AF031E",
    flex:80,
    textAlign:'center',
   },
   ajud:
   {
    fontWeight: 'bold',
    fontSize: 26,
    color:"#AF031E",
    textAlign:'center',
   },
   ajud2:
   {
    fontWeight: '20',
    fontSize: 20,
    color:"#000",
    textAlign:'center',
    margin:2
   },

   login_form:
   {
    width: "70%"
  }
  });

  export{styles};