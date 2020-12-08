import React, { Component } from 'react'
import {AppRegistry, Image, StyleSheet} from 'react-native'

export default class Corpo extends Component {
    render() {
        let pic = {
            uri: 'https://scontent.ffor1-2.fna.fbcdn.net/v/t1.0-9/36514078_1975206796123229_502619346678317056_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=mXfsKC6_B7cAX_xUVoV&_nc_ht=scontent.ffor1-2.fna&oh=e0cbbf4807273e11ac56c7d4312cc5b2&oe=5FF57F53'
            };
            return (
            <Image source={pic} style={styles.img}/>
            );
            };
}

const styles = StyleSheet.create({
    img: {
        width:200,
        height:200,
        borderRadius:100,
        margin: 10,
        backgroundColor:'#fff'
    },
});
AppRegistry.registerComponent('ProjetoInicial', () => Aluno);


