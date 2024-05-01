import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';


import { styles } from './styles';

type buttonProps = {
    name: string
    onPress: () => void,
}

export function ButtonSend({ name, onPress }: buttonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.align}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity >
    );
}
