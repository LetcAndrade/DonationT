import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {styles} from '../assets/css/styles';

//pagina de inf OK
export default function Info()
{
  return (

   <ScrollView>
    <View style={styles.container2}>
    <Image source={ require ( '../assets/inf.png')}
     style={{height: 60, resizeMode: 'contain', marginTop: 35}} />
    </View>

    <View style={styles.container3}>
    <Text style={styles.Perg}>
     Perguntas Frequentes
    </Text>
    </View>

    <View style={styles.container2}>
    <Image source={ require ( '../assets/tabela.png')}
     style={{height: 238, resizeMode: 'contain'}} />
    </View>

    <View style={styles.containerPerg}>
   <Text style={styles.Inftext}>
    Quem pode doar?
    </Text>
     <Text style={styles.InftextResp}>
     Qualquer pessoa com idade entre 18 e 69 anos que pese mais de 50 quilos. Jovens de 16 ou 17 anos também estão aptos, desde que tenham o consentimento dos pais ou dos responsáveis.
     </Text>

     <Text style={styles.Inftext}>
     Quanto sangue é retirado?
    </Text>
     <Text style={styles.InftextResp}>
     Em média, são coletados 450 mililitros. Esse volume pode salvar a vida de até quatro pessoas.
     </Text>

     <Text style={styles.Inftext}>
     Existem algumas doenças que impedem a doação de sangue?
    </Text>
     <Text style={styles.InftextResp}>
     Sim. Doenças infecciosas, como a gripe, e inflamatórias, como aquelas que atacam o intestino, exigem que a doação seja postergada para outra data. Em caso de dúvida, converse com o profissional de saúde do hemocentro para saber se tudo está ok.
     </Text>

     <Text style={styles.Inftext}>
     Quanto tempo eu tenho que esperar entre uma doação e outra? 
    </Text>
     <Text style={styles.InftextResp}>
     Os homens podem visitar o banco de sangue a cada 60 dias. Já as mulheres devem aguardar três meses
     </Text>

     <Text style={styles.Inftext}>
  Posso ingerir bebidas alcoólicas antes da doação?
    </Text>
     <Text style={styles.InftextResp}>
     A ingestão de álcool na dose máxima de 40g impede a doação por um prazo de 12 horas. O consumo em dose superior impedirá a doação por 24h.
     </Text>

     <Text style={styles.Inftext}>
     Quem fuma maconha pode doar sangue?
    </Text>
     <Text style={styles.InftextResp}>
     Se for a única droga consumida, a doação de sangue é permitida desde que o candidato não esteja sob o efeito da mesma. O uso de maconha impede a doação por 12 (doze) horas.
     </Text>
    </View> 

    
   </ScrollView>

  );
}