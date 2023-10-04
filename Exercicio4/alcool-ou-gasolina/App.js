import React, {Component, useState} from 'react'
import { Text, View, TextInput, Pressable, Image} from 'react-native';
import  {Style} from './components/style'
import myImage from './images/alcool-ou-gasolina-duelo.jpg'
export default function App() {

  const [alcool, setAlcool] = useState ()
  const [gasolina, setGasolina] = useState ()
  const [resultado, setResultado] = useState ()
  const [mensagem, setMensagem] = useState ("")

  function melhorCombustivel (){

    setResultado (alcool / gasolina);
    
    if (resultado < 0.7) {
      setMensagem('alcool é melhor');
    }else {
      setMensagem('gasolina é melhor');
    }
    
  }

  return (
      <View style = {Style.container}>

        <Text style = {Style.titulo}> Álcool ou Gasolina ? </Text>
        
        <Image
            source = {myImage}
            style={Style.imagem}

         />

        <TextInput  
          placeholder = "Preço Alcool: "
          onChangeText = {setAlcool}
          value = {alcool}
          style = {Style.input}
          
        />

        <TextInput 
          placeholder = "Preço Gasolina: "
          onChangeText = {setGasolina}
          value = {gasolina}
          style = {Style.input}
        />

        <Pressable onPress = {melhorCombustivel} style = {Style.botao}>         
        <Text> Verificar </Text> 
        </Pressable>

        <Text style = {Style.caixaTexto}> Resultado:  {mensagem} </Text>

      </View>
  )
}

