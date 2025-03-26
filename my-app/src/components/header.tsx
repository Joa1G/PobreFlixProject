import { Text, TouchableOpacity, View, Modal} from 'react-native';
import { homeStyle } from '../app/styles/homeStyle';
import MenuButton  from '../components/menuButton';
import { useState } from 'react';

export default function Header(){
        const [ menuVisible, setMenuVisible] = useState<boolean>(false);

        const handleMenuVisible = () => {
        setMenuVisible(!menuVisible)
        }

    return(
        <View style={homeStyle.headingContainer}>

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
                <View style={homeStyle.menuDropdown}>
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Pesquisar</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.menuItem}>
                    <Text style={homeStyle.menuItemText}>Animes</Text>
                </TouchableOpacity>
                
                </View>
            </TouchableOpacity>
            </Modal>

            {/* {
            menuVisible && (
                <View style={ homeStyle.menuDropdown}>
                <TouchableOpacity activeOpacity={0.7} style={homeStyle.menuDropdownItem}>
                    <Text style={homeStyle.menuDropdownText}>Filme</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={homeStyle.menuDropdownItem}>
                    <Text style={homeStyle.menuDropdownText}>Série</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={homeStyle.menuDropdownItem}>
                    <Text style={homeStyle.menuDropdownText}>Anime</Text>
                </TouchableOpacity>
                </View>
                
            )
            } */}
        </View>
    );
}