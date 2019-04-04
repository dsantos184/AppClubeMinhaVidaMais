import React, {Component} from 'react'
import{
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import styles from './style'

export default class Pesquisar extends Component
{
    render()
    {
        return(
            <View style={styles.containerPesquisar}>
                
                <TextInput 
                    style={styles.inputPesquisar} 
                    onChangeText={()=>{}}
                    placeholder='Digite o CPF'
                />

                <TouchableOpacity style={styles.btnPesquisar} onPress={()=>{}}>
                    <Image source={require('../img/icon-pesquisar.png')}  style={styles.icon}/>
                    <Text style={styles.textBtnPesquisar}>PESQUISAR</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
