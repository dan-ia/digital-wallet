import theme from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    inputContain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 40,
        backgroundColor: theme.COLORS.GRAY6,
    },
    input: {
        width: '90%',
        height: 60,
        borderRadius: 10,
        backgroundColor: theme.COLORS.GRAY6,
        paddingLeft: 10,
        fontSize: 20,
        fontFamily: theme.FONTS.TEXT
    },
});
