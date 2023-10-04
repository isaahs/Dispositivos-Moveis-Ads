import {StyleSheet} from 'react-native'

const Style = StyleSheet.create ({
  
  container: {
  marginTop: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#778899',
  borderWidth: 2,
  borderRadius: 50,
  paddingVertical: 60, 
  backgroundColor:'#F0F8FF',

},

titulo: {
  fontSize: 20,
  marginBottom:20,
  color: '#363636',
  fontWeight: 'bold',  
},

imagem: {
  width: 291,
  height: 170,
}, 

botao: {
  marginTop: 20,
  fontSize: 15,
  padding: 15,  
  borderRadius: 12, 
  borderColor: '#778899',
  borderWidth: 2,
  paddingHorizontal: 35, 
  paddingVertical: 15,
  backgroundColor:'#F8F8FF',

},
input: {
  marginTop: 10,
  fontSize: 16,
  padding: 15,  
  fontWeight: 'bold', 
},

caixaTexto: {
  marginTop: 10,
  fontSize: 20,
  borderRadius: 12, 
  borderColor: '#778899',
  padding: 8,
  backgroundColor: 'white',
  width: 200,
  height: 45,
  fontWeight: 'bold',
  color: 'red',
  textAlign:'center',
  marginStart: 12,
},

})

export {Style}