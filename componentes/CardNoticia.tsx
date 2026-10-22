import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Noticia {
  id: string;
  categoria: string;
  titulo: string;
  resumo: string;
  conteudo: string;
}

interface CardNoticiaProps {
  noticia: Noticia;
  aoClicar: () => void;
}

export default function CardNoticia({ noticia, aoClicar }: CardNoticiaProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={aoClicar} activeOpacity={0.7}>
      <View>
        <Text style={styles.categoria}>{noticia.categoria}</Text>
        <Text style={styles.titulo}>{noticia.titulo}</Text>
        <Text style={styles.resumo}>{noticia.resumo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  categoria: {
    fontSize: 12,
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  resumo: {
    fontSize: 14,
    color: '#444444',
    lineHeight: 20,
  },
});
