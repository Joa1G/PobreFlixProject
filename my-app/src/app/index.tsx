import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function Login() {

    const router = useRouter();
    
    const handleNavigation = () => {
        router.push('/Home')
    }

    return (
        <LinearGradient style={ styles.container} colors={[ '#000','#27548A', '#000']}>  
            <View style={styles.content}>
                
            <View>
            <Text style={styles.title}>Pobre<Text style={{color:"#BF3131", fontStyle: 'italic'}}>Flix</Text></Text>           
            </View>

            <Text style={styles.subTitle}> Entre e se divirta</Text>

            <TouchableOpacity style={styles.button} onPress={handleNavigation}>
                <Text style={styles.textButton}>Entrar</Text>
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
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 700,
        color: "#fff",
    },
    subTitle: {
        fontSize: 28,
        color: "#000",
        fontWeight: 500
    },
    button: {
        paddingVertical: 25,
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        borderRadius: 25,
        marginTop: 25,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 500,
        color: "#1E3A8A",
    }
})