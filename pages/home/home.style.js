import { StyleSheet } from "react-native";

const mobileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B3A55",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    imageLogoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    view1: {
        width: "100%",
        height: 70,
        backgroundColor: "#9088D4",
        justifyContent: "center",
        alignItems: "center",
    },
    view2: {
        width: "100%",
        height: 70,
        backgroundColor: "#B6C9F0",
        justifyContent: "center",
        alignItems: "center",
    },
    view3: {
        height: "30%",
        width: "80%",
        backgroundColor: "gold",
        position: "absolute",
        top: "40%",
    },
    text: {
        fontSize: 20,
        color: "#290001",
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
    },
})


const desktopStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B3A55",
    },
})

export { mobileStyles, desktopStyles };