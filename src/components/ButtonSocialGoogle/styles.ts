import theme from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 70,
        borderRadius: 20,
        backgroundColor: theme.COLORS.WHITE,
        justifyContent: 'center',
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,

    },
    align: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        fontSize: 17,
        color: theme.COLORS.GRAY3,
    },
});
