import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const loginStyles = StyleSheet.create({
    authContent: {
        flex: 1,
        backgroundColor: Colors.error100,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 30,
        marginVertical: 30,
    },
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 30,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        fontSize: 16,
    },
    label: {
        color: "black",
        marginBottom: 4,
    },
    buttonContainer: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
});

export { loginStyles };
