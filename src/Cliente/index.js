import React, {Component} from 'react'
import{
    View,
    Text
} from 'react-native'

import BarraSuperior from '../components/BarraSuperior/index'

const Cliente = (props) => {
    return(
        <View>
            <BarraSuperior/>
            <Text>Cliente</Text>
        </View>
    )
}

export default Cliente;

