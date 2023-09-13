import React, {Component, useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import {Styles} from './components/style'

export default function App() {

  const [input, setInput] = useState("")
  const [input2, setInput2] = useState("")
  const [resultado, setResultado] = useState("")

  const valor1 = parseFloat(input);
  const valor2 = parseFloat(input2);

  function multiplicar (input, input2) {
    if (!isNaN(valor1) && !isNaN(valor2)) {
      const resultado = valor1 * valor2;
      setResultado(resultado);
    } else {
      setResultado('Valores inválidos');
    }
  }

  return (
    
    <View style = {Styles.container}> 

      <Text style = {Styles.titulo}> Multiplicador de Números </Text>
    
      <TextInput 
      placeholder = "Digite o primeiro nº : "
      onChangeText= {setInput}
      value = {input}
      keyboardType = "numeric"
      style = {Styles.input}
      />

      <TextInput 
      placeholder = "Digite o segundo nº : "
      onChangeText= {setInput2}
      value = {input2}
      keyboardType = "numeric"
      style = {Styles.input}
      />

        <Pressable style = {Styles.botao} onPress={multiplicar}> <Text> Calcular</Text> </Pressable>

        <Text style = {Styles.caixaTexto} >Resultado: {resultado} </Text>
    </View>
    
  );
}
