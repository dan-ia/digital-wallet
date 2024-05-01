import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import googleIcon from '../../assets/google.png'

import { styles } from './styles';

type buttonProps = {
    name: string
}

export function ButtonSocialGoogle({ name, }: buttonProps) {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.align}>
                <Image style={{ width: 26, height: 26, }}
                    resizeMode='contain'
                    source={googleIcon} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity >
    );
}
