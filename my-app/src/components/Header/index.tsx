import { Text, TouchableOpacity, View, Modal} from 'react-native';
import { homeStyle } from './styles';
import MenuButton  from '../MenuButton/index';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header(){

        const insets = useSafeAreaInsets();

        const [ menuVisible, setMenuVisible] = useState<boolean>(false);

        const handleMenuVisible = () => {
        setMenuVisible(!menuVisible)
        }

        const [headerHeight, setHeaderHeight] = useState(0)

    return(
        <View style={homeStyle.headingContainer} onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setHeaderHeight(height);
        }}
        >

            {/*Texto de título*/}
            <Text style={homeStyle.headingText}> 
            Pobre<Text style={{color:"#BF3131", fontStyle: 'italic'}}>Flix</Text>
            </Text>
            
            {/*Botão de Menu*/}
            <MenuButton onPress={handleMenuVisible}/> 

            {/* Menu */}

            <Modal
            transparent={true} // Deixa o fundo transparente pra gente ver a tela por trás, tipo um vidro escuro
            visible={menuVisible} // Só aparece quando o menuVisible é true, controlado pelo botão de menu
            animationType="fade"  // Faz o modal surgir e sumir com um efeito suave de fade, como se estivesse surgindo do nada.
            onRequestClose={handleMenuVisible} // Aqui é para quando o usuário apertar o botão "voltar" no Android feche o modal.
            >
            <TouchableOpacity
                style={homeStyle.modalOverlay}
                activeOpacity={1} // Evita que o botão "piscar" ao clicar
                onPress={handleMenuVisible} // Fecha o modal ao clicar fora
            >
                {/* Aqui é o nosso menu dropdown, onde as opções aparecem bonitinhas feitas em aula */}
                <View style={[homeStyle.menuDropdown, {top: headerHeight + insets.top}]}>   
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Séries</Text>
                </TouchableOpacity>
                </View>
            </TouchableOpacity>
            </Modal>
        </View>
    );
}