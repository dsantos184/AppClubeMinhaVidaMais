import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import  {createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Parceiro from './Parceiro/index'
import Cliente from './Cliente/index'
import Consultor from './Consultor/index'

const navegador = createBottomTabNavigator({
    Parceiro: Parceiro,
    Cliente: Cliente,
    Consultor: Consultor
})

export default createAppContainer(navegador);