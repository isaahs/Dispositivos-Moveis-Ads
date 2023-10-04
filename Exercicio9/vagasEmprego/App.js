import React, { Component, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import {Style} from './components/style'

function App(){
  
  let initial_vagas = [
        {id: 1, Cargo: 'Desenvolvedor Back-end Pleno', Remuneração: 7000.00, Ferramentas: 'Java + Spring ', Email: 'rh@itau.com'},
        {id: 2, Cargo: 'Engenheiro de Cloud', Remuneração: 5000.00, Ferramentas: 'Oracle Database, APEX', Email: 'rh@bradesco.com'},
        {id: 3, Cargo: 'Arquiteto de Software Sênior', Remuneração: 12000.00, Ferramentas: 'Oracle Cloud', Email: 'rh@nubank.com'},
        {id: 4, Cargo: 'Gerente de Projeto', Remuneração: 15000.00, Ferramentas: 'Zoho, Podio', Email: 'fatec@inter.com'},
        {id: 5, Cargo: 'Scrum Master', Remuneração: 6000.00, Ferramentas: 'Metodologias Ágeis, Kanban', Email: 'rh@recruiter.com'},
        {id: 6, Cargo: 'Estagiário Front-end', Remuneração: 1800.00, Ferramentas: 'JavaScript, AngularJs, React', Email: 'rh@n26.com'},
      ]

  const [vagas, setVagas] = useState(initial_vagas)

  return( 
    <View style = {Style.containerInterno}>  
      <Text style = {Style.titulo}> VAGAS DE EMPREGO</Text>
    
      
      <FlatList
      data={vagas}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item}/>}
      />

    </View>
  )
}

export default App;

function Pessoa(props){
  return(
     <View style = {Style.container}>
      <Text> Cargo: {props.data.Cargo}</Text>
      <Text> Remuneração: R$ {props.data.Remuneração} </Text>
      <Text> Ferramentas:{props.data.Ferramenta} </Text>
      <Text> E-mail: {props.data.Email} </Text>
    </View>
  )
}
