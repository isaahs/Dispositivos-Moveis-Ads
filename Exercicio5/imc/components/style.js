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

texto: {
  marginTop:15,
  fontSize: 12,
  marginBottom:10,
  color: '#363636',
  fontWeight: 'bold',  
},

imagem: {
  width: 150,
  height: 150,
}, 

input: {
  marginTop: 20,
  fontSize: 12,
  padding: 15,  
  backgroundColor: 'white',
  width: 300,
  height: 45,
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

caixaTexto: {
  marginTop: 20,
  fontSize: 12,
  padding: 15,
  width: 250,
  height: 45,
  fontWeight: 'bold',
  color: 'black',
},

})
export {Style}