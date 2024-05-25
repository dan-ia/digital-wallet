import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from 'react';
import { useField } from '@unform/core'

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { TextInput, View, TextInputProps, TouchableOpacity, } from 'react-native';

import { styles } from './styles';


type inputProps = {
    placeholder: string,
    RightIcon?: boolean
    name?: string,
    value?: string,
    color: string,
    size: number,
    icon?: React.ComponentProps<typeof MaterialIcons>["name"]
    secureTextEntry?: boolean,
    TextInputProps?: TextInputProps
}



export function Input({ placeholder, RightIcon, name, value, icon, size, color, secureTextEntry, ...rest }: inputProps) {

    const [secury, setSecury] = useState(secureTextEntry)

    return (
        <View style={styles.inputContain} >
            <MaterialIcons name={icon} size={size} color={color} />

            <TextInput
                {...rest}
                autoCapitalize='none'
                autoCorrect={false}
                cursorColor={"#000"}
                secureTextEntry={secury}
                style={styles.input}
                placeholder={placeholder} />

            {RightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons name={secury ? 'eye-off' : 'eye'} size={size} color={color} />
                </TouchableOpacity>)
            }
        </View>
    );
}

