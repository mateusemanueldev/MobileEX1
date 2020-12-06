//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Disciplina = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>{props.disciplina}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        color:'white',
        marginTop:'10pt',
        textTransform:'uppercase',
        fontWeight:'bolder',
        
    },
    descricao:{
        color:'white',
        marginTop:'5pt',
    }
});

//make this component available to the app
export default Disciplina;
