import {View, Text, TouchableOpacity, Image, StyleSheet, TouchableOpacityProps} from 'react-native';

export default function MenuButton({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest} style={style.menuButton}>
            <Image style={style.menuImage} source={require("../../assets/icones/botao-de-menu.png")}></Image>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    menuButton: {
        height: 52,
        width: 52,
        backgroundColor: "#BF3131",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    menuImage: {
        width: 20,
        height: 20,
    }
});