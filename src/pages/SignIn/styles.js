import { StyleSheet } from "react-native";
import { Colors } from "../../themes/colors";

export const SignInStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    logoWrapper: {
        width: '100%',
    },
    contentWrapper: {
        marginHorizontal: 50,
        marginBottom: 50,
    },
    login:{
        width: '100%',
        marginTop: 50,
        fontSize: 26,
        color: Colors.charcoal,
    },
    info: {
        fontSize: 19,
        marginTop: 15,
        color: Colors.quickSilver
    },
    label: {
        fontSize: 17,
        color: Colors.japaneseLaurel,
        fontWeight: 'bold',
        marginTop: 30
    }
});