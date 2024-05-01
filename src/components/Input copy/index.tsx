import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

type inputProps = {
    placeholder: string
}

export function Input({ placeholder }: inputProps) {
    return (
        <TextInput style={styles.input} placeholder={placeholder} />
    );
}
