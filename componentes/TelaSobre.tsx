import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

interface TelaSobreProps {
  navigation: {
    navigate: (tela: string) => void;
  };
}

export default function TelaSobre({ navigation }: TelaSobreProps) {
  return (
    <View style={styles.container}>
      <View style={styles.conteudoSuperior}>
        <Text style={styles.titulo}>Sobre</Text>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png',
          }}
          style={styles.imagem}
          resizeMode="contain"
        />

        <View style={styles.divisor} />

        <View style={styles.textoContainer}>
          <Text style={styles.descricao}>Esse é o Mini App de Notícias.</Text>
          <Text style={styles.descricao}>
            Você vai praticar diferentes tipos de navegação com React-Native:
          </Text>
          <Text style={styles.topico}> • Drawer (raiz)</Text>
          <Text style={styles.topico}> • Tabs (Tecnologia/Esportes)</Text>
          <Text style={styles.topico}> • Stacks (Lista → Detalhes)</Text>
        </View>
      </View>

      <View style={styles.botaoContainer}>
        <Button
          title="VOLTAR"
          onPress={() => navigation.navigate('Notícias')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
    justifyContent: 'space-between',
  },
  conteudoSuperior: {
    alignItems: 'center',
    marginTop: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 12,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 16,
  },
  textoContainer: {
    width: '100%',
  },
  descricao: {
    fontSize: 16,
    color: '#2c2c2e',
    lineHeight: 24,
  },
  topico: {
    fontSize: 16,
    color: '#2c2c2e',
    lineHeight: 26,
    marginLeft: 12,
  },
  botaoContainer: {
    width: '100%',
    marginBottom: 8,
  },
});
