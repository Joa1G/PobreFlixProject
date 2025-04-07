import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
    headingContainer: {
        backgroundColor: "#143D60",
        height: 80,
        width: "100%",
        alignItems: "center",
        paddingLeft: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        justifyContent: "space-between"
    },
    headingText: {
        fontSize: 40,
        fontWeight: 700,
        color: "#fff",
    },
    menuDropdown: {
        top: 80,
        position: 'absolute',
        right: 0,
        left: 0,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(42, 51, 71, 1)',
    },
    menuDropdownText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: "bold"
    },
    menuDropdownItem: {
        justifyContent: 'center',
    },
    // O que mudou ? Novo estilo modalOverlay
  modalOverlay: {
    flex: 1,
    // Define um fundo preto semi-transparente (50% de opacidade) para dar destaque ao menu e escurecer o resto
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 

    // Posiciona o conteúdo (menu) no topo da tela, mantendo-o alinhado verticalmente desde o início
    justifyContent: 'flex-start', 

   // Centraliza o menu horizontalmente, criando um efeito equilibrado e simétrico na tela, pelo menos essa é a intenção
    alignItems: 'center', 
    
  },

  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },

  menuItemText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});