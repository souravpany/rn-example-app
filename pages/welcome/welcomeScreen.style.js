import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const welcomeStyles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 16,
    },
    welcomeTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    header: {
        width: "100%",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        backgroundColor: Colors.primary500,
        fontSize: 25,
        marginTop: 6,
        marginBottom: 6,
    },
    item: {
        height: 45,
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "#6B728E",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 6,
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
    },
});

export { welcomeStyles };
