import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Logo from '../components/AppNameLogo';
import  Ionicons from "@expo/vector-icons/Ionicons";

export default function Login() {

    const router = useRouter();
    
    const handleNavigation = () => {
        router.push('/Home')
    }

    return (
        <LinearGradient style={ styles.container} colors={[ '#000','#27548A', '#000']}>
            <Logo/>
            <View style={styles.content}>
                <StatusBar style="light" backgroundColor='#000'/>
                
                
                <Text style={styles.subTitle}> Entre e se <Text style={styles.subTitlePost}>divirta</Text></Text>

                <TouchableOpacity style={styles.button} onPress={handleNavigation}>
                    <Text style={styles.textButton}>Entrar</Text>
                    <Ionicons name="arrow-forward" color="#fff" size={24}  />
                </TouchableOpacity>   

            </View>
      </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 700,
        color: "#fff",
    },
    subTitle: {
        fontSize: 28,
        color: "#fff",
        fontWeight: 700
    },
    subTitlePost: {
        color: '#BF3131',
        fontFamily: "italic",
        textShadowColor: "#fff",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0.3,
    },
    button: {
        paddingVertical: 25,
        paddingHorizontal: 30,
        backgroundColor: "#BF3131",
        borderRadius: 25,
        marginTop: 25,
        width: "80%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textButton: {
        fontSize: 18,
        fontWeight: 500,
        color: "#fff",
    }
})