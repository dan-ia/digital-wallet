import theme from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        // width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: theme.COLORS.GRAY6,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: theme.FONTS.TEXT
    }
});
