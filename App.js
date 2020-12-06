import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../ex1/components/Cabecalho';
import Corpo from '../ex1/components/Corpo';
import Disciplina from '../ex1/components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome="Marcos" curso="Design Digital"/>
      <Corpo/>
      <Disciplina disciplina="Mobile"/>
      <Disciplina disciplina="Design e Inovação"/>
      <Disciplina disciplina="Projeto Integrado IV"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111823',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
