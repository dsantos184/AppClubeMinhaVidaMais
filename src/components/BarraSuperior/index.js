import React, {Component} from 'react'
import{
    View,
    Text,
    Image
} from 'react-native'
import styles from './style';

const BarraSuperior = (props) => (
    <View style={styles.containerBarra}>
        <Image style={styles.logo} source={require('../../img/logo.png')} />
        <Text style={styles.titleBarraSuperior}>{props.title}</Text>
    </View>
)

export default BarraSuperior