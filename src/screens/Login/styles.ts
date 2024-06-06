import theme from '@/styles/theme';
import { FontDisplay } from 'expo-font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: theme.COLORS.BLACK,
        fontFamily: theme.FONTS.POPPINSBOLD
    },
    subtitle: {
        marginTop: 50,
        fontSize: 17,
        textAlign: 'center',
        color: theme.COLORS.GRAY3,
        fontFamily: theme.FONTS.TEXT
    },
    viewButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
    },
    viewInput: {
        width: '100%',
        gap: 20,
        marginTop: 100,
    },
    resetPassword: {
        paddingTop: 20,
    },
    viewButtonSend: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    viewRegister: {
        marginTop: 10,
        flexDirection: 'row',
    },
    noregister: {
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.BLACK,
    },
    register: {
        fontFamily: theme.FONTS.TEXT,
        color: theme.COLORS.BLUE1,
        paddingBottom: 40,
    },

});
