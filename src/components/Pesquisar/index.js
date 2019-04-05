import React, {Component} from 'react'
import{
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'

import TextInpuMask from 'react-native-text-input-mask'

import styles from './style'

export default class Pesquisar extends Component
{
    render()
    {
        return(
            <View style={styles.containerPesquisar}>
                
                <TextInpuMask                    
                    style={styles.inputPesquisar} 
                    onChangeText={(value) => this.props.cpf(value)}
                    placeholder='Digite o CPF'
                    mask={'[000].[000].[000]-[00]'}
                />

                <TouchableOpacity style={styles.btnPesquisar} onPress={()=>{}}>
                    <Image source={require('../../img/icon-pesquisar.png')}  style={styles.icon}/>
                    <Text style={styles.textBtnPesquisar}>PESQUISAR</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
