import React, {Component} from 'react'
import{
    View,
    Text,
    Image
} from 'react-native'

import styles from './style'

const Feedback = (props) => (
    <View style={[styles.containerFeed, styles.feedCheck]}>
        <Image 
            source={require('../../img/icon-check.png')} 
            style={styles.iconFeed}
        />

        <Text style={[styles.textFeed, styles.textFeedCheck]}>O usuário está dacasdastrado</Text>
    </View>
)

export default Feedback