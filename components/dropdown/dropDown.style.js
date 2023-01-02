import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const dropDownStyles = StyleSheet.create({
    dropDownContainer: {
        backgroundColor: 'white',
        padding: 4
    },
    selectedItemStyle: {
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal: 6,
        marginBottom: 4,
    },
    dropDownStyle: {
        backgroundColor: Colors.primary800,
        padding: 8,
        borderRadius: 6,
        minHeight: 42,
        justifyContent: 'center',
        marginBottom: 6
    },
    item: {
        fontSize: 15,
        fontWeight: "bold",
        color: 'white'
    }
});

export { dropDownStyles };
