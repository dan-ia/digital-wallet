import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from 'react';
import { useField } from '@unform/core'
import { MaterialIcons } from '@expo/vector-icons';

import { TextInput, View, TextInputProps } from 'react-native';

import { styles } from './styles';
import theme from '@/styles/theme';

type inputProps = {
    placeholder: string,
    name?: string,
    value?: string,
    color: string,
    size: number,
    icon?: React.ComponentProps<typeof MaterialIcons>["name"]
}

export function Input({ placeholder, name, value, icon, size, color }: inputProps) {
    return (
        <View style={styles.inputContain}>
            <MaterialIcons name={icon} size={size} color={color} />
            <TextInput style={styles.input} placeholder={placeholder} />
        </View>
    );
}
