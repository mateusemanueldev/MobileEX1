import React, { Component } from 'react'
import {AppRegistry, Image} from 'react-native'

export default class Corpo extends Component {
    render() {
        let pic = {
            uri: 'https://voosolto.com.br/wp-content/uploads/2017/06/curso.png'
            };
            return (
            <Image source={pic} style={{width: 200, height: 200}}/>
            );
            }
}
AppRegistry.registerComponent('ProjetoInicial', () => Aluno);


