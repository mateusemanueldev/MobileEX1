//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Cabecalho = (props) => {
    return (
        <View style={styles.container}>
             <Text style={styles.textname}>{props.nome}</Text>
             <Text style={styles.textcurso}>{props.curso}</Text>
             
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textname:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        color:'white',
    },
    textcurso:{
        textAlign:'center',
        color:'white',
    }
});

export default Cabecalho;
