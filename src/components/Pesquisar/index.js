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
                    placeholder={this.props.placeholder}
                    mask={this.props.maskInput}
                />

                <TouchableOpacity style={styles.btnPesquisar} onPress={()=>{}}>
                    <Image source={this.props.icon}  style={styles.icon}/>
                    <Text style={styles.textBtnPesquisar}>{this.props.textButton}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
