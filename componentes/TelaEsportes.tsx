import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CardNoticia, { Noticia } from './CardNoticia';

interface TelaEsportesProps {
  navigation: {
    navigate: (tela: string, params?: { noticia: Noticia }) => void;
  };
}

export default function TelaEsportes({ navigation }: TelaEsportesProps) {
  const [noticias] = useState<Noticia[]>([
    {
      id: '1',
      categoria: 'ESPORTES',
      titulo: 'Final do campeonato é definida',
      resumo: 'Os times X e Y se enfrentarão na grande final...',
      conteudo:
        'Após semifinais eletrizantes, os times X e Y garantiram suas vagas e se enfrentarão na grande final do campeonato nacional no próximo domingo. A equipe X venceu de virada com um gol nos acréscimos, enquanto o time Y dominou seu adversário com uma vitória por 3 a 0. A expectativa é de um jogo histórico no estádio Maracanã.',
    },
    {
      id: '2',
      categoria: 'ESPORTES',
      titulo: 'Atleta quebra recorde mundial',
      resumo: 'Na modalidade de corrida, um novo recorde foi estabelecido...',
      conteudo:
        'Na modalidade de corrida de 100 metros rasos, um novo recorde mundial foi estabelecido diante de um estádio lotado, superando a marca anterior que durava mais de uma década.',
    },
    {
      id: '3',
      categoria: 'ESPORTES',
      titulo: 'Clássico termina empatado',
      resumo:
        'Em jogo equilibrado, equipes dividem pontos após viradas nos minutos finais.',
      conteudo:
        'Em jogo equilibrado e cheio de gols, as duas equipes dividem pontos após viradas emocionantes nos minutos finais da partida válida pela rodada do campeonato.',
    },
    {
      id: '4',
      categoria: 'ESPORTES',
      titulo: 'Seleção confirma amistosos',
      resumo:
        'Jogos de preparação visam dar ritmo a jovens promessas antes do torneio continental.',
      conteudo:
        'A confederação confirmou dois novos jogos de preparação que visam dar ritmo de jogo a jovens promessas convocadas antes do início do torneio continental.',
    },
    {
      id: '5',
      categoria: 'ESPORTES',
      titulo: 'Maratonista surpreende',
      resumo:
        'Atleta vence prova de rua e estabelece melhor marca pessoal em percurso desafiador.',
      conteudo:
        'O atleta surpreendeu os favoritos, venceu a tradicional prova de rua internacional e estabeleceu sua melhor marca pessoal em um percurso considerado altamente desafiador.',
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
