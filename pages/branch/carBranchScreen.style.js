import { StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

const carBranchStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
    inputContainer: {
        marginTop: 10,
        marginVertical: 8,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary800,
        borderRadius: 4,
        color: 'white',
        fontSize: 16,
    },
    buttonContainer: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
});

export { carBranchStyles };
