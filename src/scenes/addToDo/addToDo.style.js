import {
    I18nManager, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 20
    },
    textInput: {
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        color: "black",
        backgroundColor: "white",
        height: 150,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10
    },
    buttonStyle: {
        borderRadius: 13,
        marginTop: 20,
        backgroundColor: "#662d91"
    },
    disabled: { opacity: .6 },
});

export default styles;