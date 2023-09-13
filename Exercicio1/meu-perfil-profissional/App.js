import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Meu Perfil Profissional
      </Text>

      <Image
         resizeMode = 'cover' source={require('./assets/img-isa.png')}
          style={{ width: 250, height: 300, margin: 5, marginBottom: 15, marginRight: 10, borderRadius: 30, alignSelf: 'center'}}
      />

      <Text style={styles.title}>Dados Pessoais: </Text>
      <Text style={styles.text}>Nome: Isadora Mota de Souza. {'\n'}Data de Nascimento: 16/09/2002.{'\n'}Hobbies: Leitura, Jogar Games, Ouvir música.</Text>
      <Text style={styles.title}>Formação: </Text>
      <Text style={styles.text}>Tecnólogo em Análise e Desenvolvimento de Sistemas </Text>
      <Text style={styles.title}>Experiência: </Text>
      <Text style={styles.text}> Estágio em desenvolvimento FrontEnd {'\n'} Local: Itaú Unibanco   {'\n'} Duração: Atual{'\n'}{'\n'} Estágio em Suporte Técnico; {'\n'} Local: Prefeitura Municipal de São Vicente;{'\n'} Duração: 6 meses.
      </Text>
      <Text style={styles.title}>Projetos: </Text>
      <Text style={styles.text}> Por enquanto, esse é o primeiro :D</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFCBE8',
    padding: 10,
  },
  paragraph: {
    margin: 35,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginLeft: 25,
    margin: 5,
    fontSize: 14,
    textAlign: 'left',
  },
  title: {
    marginLeft: 15,
    marginTop: 9,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  }
  
});
