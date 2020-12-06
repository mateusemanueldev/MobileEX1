//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Cabecalho = (props) => {
    return (
        <View style={styles.container}>
             <Text style={styles.text1}>{props.nome}</Text>
             <Text style={styles.text2}>{props.curso}</Text>
             <br/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text1:{
        textAlign:'center',
        fontSize:'25pt',
        fontWeight:'bold',
        color:'white',
    },
    text2:{
        textAlign:'center',
        color:'white',
    }
});

export default Cabecalho;
