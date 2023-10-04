import React, {Component, useState } from 'react';
import { View, Text, TextInput, Pressable, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import {Style} from './style';

export default function App() {

  const [nome, setNome] = useState ("");
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState(0);
  const [status, setStatus] = useState(false);
  const [resposta, setResposta] = useState ('')


  function mostrarDados() {
    return(
    <View style = {Style.mostrar}> 
      <Text>Nome: {nome} </Text>
      <Text>Idade: {idade} </Text>
      <Text>Sexo: {sexo} </Text>
      <Text>Escolaridade: {escolaridade} </Text>
      <Text>Limite: R$ {limite.toFixed(2)} </Text>
      <Text>Brasileiro: {status?'Sim':'Não'} </Text>
    </View>
    )
  }
  return (
    <View style = {Style.container}> 
      <Text style = {Style.titulo}>
          Abertura de Conta Corrente
      </Text>
      <Text style = {Style.texto}>
        Nome: 
          <TextInput
            placeholder = ''
            onChangeText= {setNome}
            value = {nome}
            style = {Style.caixaTexto}
          />
      </Text>
      <Text style = {Style.texto}>
        Idade: 
          <TextInput
            placeholder = ''
            onChangeText= {setIdade}
            value = {idade}
             style = {Style.caixaTexto}
          />
      </Text>
      <Text style = {Style.texto}> 
        Sexo:
      
          <Picker onValueChange={setSexo} style = {Style.caixaTexto}>
            <Picker.Item label = "Feminino"/>
            <Picker.Item label = "Masculino"/>
            <Picker.Item label = "Não-Binário"/>
          </Picker>
      </Text >

      <Text style = {Style.texto}>
        Formação:

          <Picker onValueChange={setEscolaridade} style = {Style.picker}> 
            <Picker.Item label = "Analfabeto"/>
            <Picker.Item label = "Fundametal Completo"/>
            <Picker.Item label = "Ensino Medio Completo"/>
            <Picker.Item label = "Graduação Completa"/>
          </Picker>
        </Text>
        <Text style = {Style.texto}>
            Limite: 
        </Text> 
        <View style = {Style.slider}>  
            <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={ (limiteEscolhido) => setLimite(limiteEscolhido)}
            value={limite}
            minimumTrackTintColor='green'
            maximumTrackTintColor='red'
            thumbTintColor='black'
            
          /> 
          <Text>        
            R${limite.toFixed(2)}
          </Text>
        </View>  
      <Text style = {Style.teclaSwitch}> 
        Brasileiro:
     
          <Switch
            value={status}
            onValueChange={ (statusSwitch) => setStatus(statusSwitch) }
           
          />
            {(status) ? "Sim" : "Não"}
       </Text>

      <Pressable onPress={()=>setResposta(mostrarDados)} style = {Style.botao}>
        <Text> 
          Confirmar
        </Text>
      </Pressable>

      {resposta}
    </View>
    )}