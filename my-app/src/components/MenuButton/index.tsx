import {TouchableOpacity, Image, TouchableOpacityProps} from 'react-native';
import { styles } from "./styles"

export default function MenuButton({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest} style={styles.menuButton}>
            <Image style={styles.menuImage} source={require("../../../assets/icones/botao-de-menu.png")}></Image>
        </TouchableOpacity>
    );
}