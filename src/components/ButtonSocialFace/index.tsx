import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';


type buttonProps = {
    name?: string
    size?: number
    color?: string
    icon?: React.ComponentProps<typeof FontAwesome>["name"]
}

export function ButtonSocialFace({ icon, name, size, color, ...rest }: buttonProps) {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <View style={styles.align}>
                <FontAwesome name={icon} size={size} color={color} />
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity >
    );
}
