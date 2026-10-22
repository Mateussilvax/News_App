import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Noticia } from './CardNoticia';

interface TelaDetalhesProps {
  route?: {
    params?: {
      noticia?: Noticia;
    };
  };
  navigation?: {
    setOptions: (options: { title: string }) => void;
  };
}

export default function TelaDetalhes({ route, navigation }: TelaDetalhesProps) {
  const noticia = route?.params?.noticia;

  useEffect(() => {
    if (noticia && navigation) {
      navigation.setOptions({
        title: noticia.titulo,
      });
    }
  }, [navigation, noticia]);

  if (!noticia) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudoContainer}>
        <Text style={styles.categoria}>{noticia.categoria}</Text>
        <Text style={styles.titulo}>{noticia.titulo}</Text>
        <Text style={styles.conteudo}>{noticia.conteudo}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  conteudoContainer: {
    padding: 16,
  },
  categoria: {
    fontSize: 12,
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 12,
  },
  conteudo: {
    fontSize: 16,
    color: '#2c2c2e',
    lineHeight: 24,
  },
});
