import React, {Component, useState} from 'react';
import { View,Text, TextInput, Pressable, Image} from 'react-native';
import {Style} from './components/style';
import myImage from './images/charadas.png';
export default function App() {

  const [numero, setNumero] = useState();


  function numeroAleatorio (){

      setNumero(Math.floor(Math.random() * 11)); 
      
  }
  return (
    <View style = {Style.container}>

      <Text style = {Style.titulo}>
          Jogo do Nº Aleatório
      </Text>

      <Image
      source = {myImage}
      style = {Style.imagem}
      />

     <Text style = {Style.input}>
         Pense em um nº aleatório de 0 a 10
      </Text>

      
      <Text style = {Style.caixaTexto} >
         {numero}
      </Text>
      
      <Pressable onPress = {numeroAleatorio} style = {Style.botao}>
        <Text > Descobrir </Text>
      </Pressable>

    </View>
  );
}


