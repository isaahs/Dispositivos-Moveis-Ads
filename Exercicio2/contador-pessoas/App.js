import {View, Text, Pressable} from 'react-native';
import {Style} from './components/style';
import {useState} from 'react';
export default function App (){
  const [contador, setContados] = useState(0)

  function contar(incrementar) {
    if (incrementar){
        setContados (contador + 1);
    }else if (contador > 0) {
        setContados (contador - 1);
    }
}

  return (
    <View  style = {Style.container}> 

      <Text style={Style.titulo}> Contador de Pessoas </Text>
      <Text style={Style.caixaTexto}>{contador}</Text>

      <Pressable style={Style.botao}  onPress= {() => contar (true)}> + </Pressable>

    <Pressable style={Style.botao2}  onPress= {() => contar (false)}> - </Pressable>

    </View>
  )
}


