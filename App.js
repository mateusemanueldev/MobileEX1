import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../ex1/components/Cabecalho';
import Corpo from '../ex1/components/Corpo';
import Disciplina from '../ex1/components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome="Mateus Emanuel" curso="Design Digital"/>
      <Corpo/>
      <Text style={styles.titulo}>DISCIPLINAS MATRICULADAS</Text>
      <View style={styles.disciplinas}>
      <Disciplina disciplina="Mobile "/><Text style={styles.separador}>| </Text>
      <Disciplina disciplina="Design e Inovação "/><Text style={styles.separador}>| </Text>
      <Disciplina disciplina="Projeto Integrado IV"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2670B9',
    alignItems:'center',
    justifyContent: 'center',
  },
  disciplinas:{
    display:'flex',
    flexDirection:'row',
  },
  titulo:{
    color:'#fff',
    marginBottom:5,
    fontWeight:'bold'
  },
  separador:{
    color:'white'
  }
});
