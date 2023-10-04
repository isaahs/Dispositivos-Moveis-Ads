import React, {Component, useState} from 'react'
import { Text, View, TextInput, Pressable, Image} from 'react-native';
import  {Style} from './components/style'
import myImage from './assets/imc.png'
export default function App() {

  const [peso, setPeso] = useState ()
  const [altura, setAltura] = useState ()
  const [resultado, setResultado] = useState ()

  function calcularImc (peso, altura){

    const imc = (peso/(altura * altura));
    
    if (imc < 18.5){
      return 'Abaixo do Peso';
    }else if (imc < 24.9){
      return 'Peso Normal';
    }else if (imc < 29.9){
      return 'Sobrepeso';
    }else if (imc < 34.9){
      return 'Obesidade Grau I';
    }else if (imc < 39.9){
      return 'Obesidade Grau II';
    }else {
      return 'Obesidade Grau III ou Mórbida';
    }
    
  }

  return (
      <View style = {Style.container}>

        <Text style = {Style.titulo}> Cálculo do IMC </Text>

          <Image
            source = {myImage}
            style={Style.imagem}

          />
          
        <Text style = {Style.texto}> Inserir o valor da altura com ponto, não utilizar vírgula. </Text>

        <TextInput  
          placeholder = "Peso: "
          onChangeText = {setPeso}
          value = {peso}
          style = {Style.input} 
        />

        <TextInput 
          placeholder = "Altura: "
          onChangeText = {setAltura}
          value = {altura}
          style = {Style.input}
        />
        
        <Pressable onPress = {() => setResultado(calcularImc(peso, altura))} style = {Style.botao}>         
        <Text> Verificar </Text> 
        </Pressable>

        <Text style = {Style.caixaTexto}> Classificação: {resultado} </Text>

      </View>
  )
}

