import React, {Component} from 'react'
import{
    View,
    Text
} from 'react-native'

import BarraSuperior from '../components/BarraSuperior/index'
import Pesquisar from '../components/Pesquisar/index'
import styles from './style'
import Feedback from '../components/Feedback/index'

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
                
                <BarraSuperior title='Consultar CPF'/>
                
                <View style={styles.conteudo}>
                    
                    <Pesquisar 
                        cpf={value => {
                            this.setCpf(value);
                        }}
                        maskInput = '[000].[000].[000]-[00]'
                        icon = {require('../img/icon-pesquisar.png')}
                        textButton = 'Pesquisar'
                        placeholder = 'Digite o CPF'
                    />
                    
                    <View style={styles.containerResultado}>
                        <Feedback/>
                        
                    </View>

                </View>

            </View>
        )
    }
}