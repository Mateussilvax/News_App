import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CardNoticia, { Noticia } from './CardNoticia';

interface TelaTecnologiaProps {
  navigation: {
    navigate: (tela: string, params?: { noticia: Noticia }) => void;
  };
}

export default function TelaTecnologia({ navigation }: TelaTecnologiaProps) {
  const [noticias] = useState<Noticia[]>([
    {
      id: '1',
      categoria: 'TECNOLOGIA',
      titulo: 'React Native lança nova versão',
      resumo: 'A nova versão 0.xx traz melhorias de performance...',
      conteudo:
        'A nova versão 0.xx do React Native traz melhorias significativas de performance, maior estabilidade na Nova Arquitetura e ferramentas aprimoradas para o desenvolvimento mobile multiplataforma.',
    },
    {
      id: '2',
      categoria: 'TECNOLOGIA',
      titulo: 'IA generativa bate recordes',
      resumo: 'Modelos de linguagem estão cada vez mais avançados...',
      conteudo:
        'Modelos de linguagem estão cada vez mais avançados, batendo recordes de adoção no mercado de tecnologia e auxiliando equipes na criação de soluções inteligentes e automação de processos.',
    },
    {
      id: '3',
      categoria: 'TECNOLOGIA',
      titulo: 'Expo SDK 52 é lançado',
      resumo:
        'Novas APIs, melhorias no Dev Client e correções de estabilidade para projetos mobile.',
      conteudo:
        'Novas APIs, melhorias no Dev Client e correções de estabilidade para projetos mobile. O novo Expo SDK facilita ainda mais a integração com recursos nativos de câmera, áudio e navegação.',
    },
    {
      id: '4',
      categoria: 'TECNOLOGIA',
      titulo: 'TypeScript 5.x melhora performance',
      resumo:
        'Atualizações no compilador reduzem tempos de build e melhoram suporte a decorators.',
      conteudo:
        'Atualizações no compilador reduzem tempos de build e melhoram suporte a decorators, tornando a verificação de tipos muito mais ágil em aplicativos React Native de qualquer porte.',
    },
    {
      id: '5',
      categoria: 'TECNOLOGIA',
      titulo: 'Hermes recebe otimizações',
      resumo:
        'Engine JavaScript do React Native ganha melhor gerenciamento de memória e start mais rápido.',
      conteudo:
        'Engine JavaScript do React Native ganha melhor gerenciamento de memória e start mais rápido, proporcionando animações mais fluidas e menor consumo de bateria nos dispositivos.',
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.lista}>
        {noticias.map((item) => (
          <CardNoticia
            key={item.id}
            noticia={item}
            aoClicar={() => navigation.navigate('Detalhes', { noticia: item })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  lista: {
    padding: 16,
  },
});
