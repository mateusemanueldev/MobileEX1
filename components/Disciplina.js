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
    descricao:{
        color:'white',
        margin:2,
    }
});

//make this component available to the app
export default Disciplina;
