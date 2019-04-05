import React, {Component} from 'react'
import{
    View,
    Text
} from 'react-native'

import BarraSuperior from '../components/BarraSuperior/index'
import Pesquisar from '../components/Pesquisar/index'
import styles from './style'

export default class Parceiro extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            cpf: 'sasas',
        }
    }

    setCpf = (value) =>{
        let s = this.state
        s.cpf = value
        this.setState(s);
    }

    render()
    {
        return(
            <View style={styles.container}>
                
                <BarraSuperior title='Consultar de CPF'/>
                
                <View style={styles.conteudo}>
                    <Pesquisar cpf={value => {
                        this.setCpf(value);
                    }}/>
                </View>

                <Text>{this.state.cpf}</Text>
    
            </View>
        )
    }
}