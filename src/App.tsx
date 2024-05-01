import { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar, } from 'expo-status-bar';

import * as Font from "expo-font"

import {
    DMSans_400Regular
} from "@expo-google-fonts/dm-sans"

import {
    DMSerifDisplay_400Regular
} from "@expo-google-fonts/dm-serif-display"

import {
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins"

import * as SplashScreen from "expo-splash-screen";
import { Login } from './screens/Login';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Poppins_300Light,
                    Poppins_400Regular,
                    Poppins_500Medium,
                    Poppins_700Bold,
                    Poppins_800ExtraBold,
                    DMSans_400Regular,
                    DMSerifDisplay_400Regular
                });
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (

        <View style={{
            flex: 1,
            backgroundColor: '#fefefe'
        }} onLayout={onLayoutRootView}>
            <StatusBar style='auto' translucent />
            <Login />
        </View>

    );
}
