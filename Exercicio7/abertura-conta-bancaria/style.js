import {StyleSheet} from 'react-native'

const Style = StyleSheet.create ({

container: {
  marginTop: 40,
  borderColor: '#778899',
  borderWidth: 2,
  borderRadius: 50,
  paddingVertical: 60, 
  backgroundColor:'#F0F8FF',
  justifyContent: 'center',
  alignItems: 'center',

},

titulo: {
  fontSize: 20,
  marginBottom:20,
  color: '#363636',
  fontWeight: 'bold',  
},

texto: {
  fontSize: 16,
  marginBottom:10,
  marginEnd: 50,
  padding: 5,
  color: '#363636',
  fontWeight: 'bold', 
},

caixaTexto: {
  fontSize: 15,
  width: 200,
  height: 30,
  color: '#363636',
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#aaa',
  margin: 8,
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

slider: {
    flexDirection:'row',
    alignItems:'center',
    width:200
},
picker: {
  fontSize: 15,
  width: 200,
  height: 30,
  color: '#363636',
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#aaa',
  margin: 8,
},

teclaSwitch: {
  padding: 15,
  color: '#363636',
  fontWeight: 'bold',

},
mostrar: {
  fontSize: 16,
  marginBottom:10,
  marginEnd: 50,
  padding: 5,
  color: '#363636',
  fontWeight: 'bold',
}

})
export {Style}