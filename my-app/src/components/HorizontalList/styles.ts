import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#143D60",
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 8,
    },
    sectionTitle: {
        color: "#BF3131",
        fontSize: 20,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: 0.3,
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0.3,
        marginLeft: 15,
        marginBottom: 10
    },
    item: {
        width: 140,
        marginRight: 15,
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        elevation: 8
    },
    itemImage: {
        width: 140,
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    itemText: {
        color: "#fff",
        fontWeight: 700,
        textAlign: "center",
        marginVertical: 5,
        marginHorizontal: 5,
    },
    list: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
});