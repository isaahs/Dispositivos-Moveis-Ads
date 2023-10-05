import { View,Image, Text, ScrollView } from 'react-native';
import {Style} from './components/style'
import headset from './imagens/headset.png'
import monitor from './imagens/monitor.png'
import mouse from './imagens/mouse.png'
import mousepad from './imagens/mousepad.png'
import teclado from './imagens/teclado.png'

function App(){
  return (
    <View style={Style.body}>
      <Text style={Style.titulo}>Ofertas de Produtos</Text>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        <View style={Style.container}>
          <Text style={Style.texto}>
            Nome: Headphone HV-H2002d
          </Text>
          <Text style={Style.texto}>
            Marca: Havit
          </Text>
          <Text style={Style.texto}>
            Preço: R$198,98
          </Text>
          <Image
            source={headset}
            style={Style.imagem}
          />
        </View>

        <View style={Style.container}>
          <Text style={Style.texto}>
            Nome: Monitor Gamer FHD, 5Hz
          </Text>
          <Text style={Style.texto}>
            Marca: Samsung
          </Text>
          <Text style={Style.texto}>
            Preço: R$559,09
          </Text>
          <Image
            source={monitor}
            style={Style.imagem2}
          />
        </View>

        <View style={Style.container}>
          <Text style={Style.texto}>
            Nome: Mouse Gamer Cobra M711
          </Text>
          <Text style={Style.texto}>
            Marca: Redragon
          </Text>
          <Text style={Style.texto}>
            Preço: R$166,78
          </Text>
          <Image
            source={mouse}
            style={Style.imagem3}
          />
        </View>

        <View style={Style.container}>
          <Text style={Style.texto}>
            Nome: Teclado Gamer Alloy Core RGB
          </Text>
          <Text style={Style.texto}>
            Marca: HyperX
          </Text>
          <Text style={Style.texto}>
            Preço: R$179,89
          </Text>
          <Image
            source={teclado}
            style={Style.imagem4}
          />
        </View>

        <View style={Style.container}>
          <Text style={Style.texto}>
            Nome: Mouse Pad Gaming HV-MP830
          </Text>
          <Text style={Style.texto}>
            Marca: Havit
          </Text>
          <Text style={Style.texto}>
            Preço: R$52,42
          </Text>
          <Image
            source={mousepad}
            style={Style.imagem5}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
