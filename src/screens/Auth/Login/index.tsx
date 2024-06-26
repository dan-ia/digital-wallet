import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, KeyboardAvoidingView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '@/styles/theme';
import { styles } from './styles';

import { Input } from '@/components/Input';
import { ButtonSend } from '@/components/ButtonSend';
import { ButtonSocialFace } from '@/components/ButtonSocialFace';
import { ButtonSocialGoogle } from '@/components/ButtonSocialGoogle';

function buttonAlert() {
    console.log('Pressionado!')
}

export function Login() {

    const navigation = useNavigation()

    function handleCadastro() {
        navigation.navigate('Cadastro')
    }

    function handleRecuperarSenha() {
        navigation.navigate('RecuperarSenha')
    }

    return (
        <KeyboardAvoidingView
            behavior='position'
            enabled>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Digital Wallet</Text>
                <Text style={styles.subtitle}>Sign up with</Text>

                <View style={styles.viewButton}>
                    <ButtonSocialGoogle name='Google' />
                    <ButtonSocialFace icon='facebook' name='Facebook' size={26} color={theme.COLORS.WHITE} />
                </View>

                <View style={styles.viewInput}>
                    <Input
                        icon="person-outline"
                        secureTextEntry={false} size={26}
                        color={theme.COLORS.GRAY3}
                        placeholder='Username'
                    />

                    <Input
                        icon="password"
                        secureTextEntry
                        RightIcon size={26}
                        color={theme.COLORS.GRAY3}
                        placeholder='Password'
                    />
                </View>

                <TouchableOpacity onPress={handleRecuperarSenha} style={styles.resetPassword}>
                    <Text>Recuperar Senha</Text>
                </TouchableOpacity>

                <View style={styles.viewButtonSend}>
                    <ButtonSend onPress={buttonAlert} name='Login' />
                </View>

                <View style={styles.viewRegister}>
                    <Text style={styles.noregister}>Don't have on account yet? </Text>
                    <Pressable onPress={handleCadastro}>
                        <Text style={styles.register}>Register</Text>
                    </Pressable>
                </View>

            </View>
        </KeyboardAvoidingView>

    );
}
