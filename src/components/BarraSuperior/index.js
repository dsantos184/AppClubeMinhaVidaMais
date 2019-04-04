import React, {Component} from 'react'
import{
    View,
    Text,
    Image
} from 'react-native'
import style from './style';

const BarraSuperior = (props) => (
    <View style={style.containerBarra}>
        <Image style={styles.logo} source={require('../../img/logo.png')} />
    </View>
)

export default BarraSuperior