import {StyleSheet} from 'react-native'

const Style = StyleSheet.create ({

container: {
  marginTop: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 12, 
  borderColor: '#778899',
  borderWidth: 2,
  paddingVertical: 60, 
  backgroundColor:'#F0F8FF',
},
titulo: {
  fontSize: 30,
  marginBottom:20,
  color: '#363636',
  
},
caixaTexto: {
  fontSize: 45,
  borderRadius: 12, 
  borderColor: '#778899',
  borderWidth: 2,
  paddingHorizontal: 35, 
  paddingVertical: 15,
  backgroundColor:'#F8F8FF',
},
botao: {
  marginTop: 10,
  textAlign:' center',
  fontSize: 30,
  padding: 15,  
  borderRadius: 100,
  borderColor: '#98FB98',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#98FB98',
  width: 150,
  height: 45,
},

botao2: {
  marginTop: 20,
  textAlign:' center',
  fontSize: 30,
  padding: 15,  
  borderRadius: 100,
  borderColor: '#FF6347	',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FF6347',
  width: 150,
  height: 45,

}


})

export {Style};