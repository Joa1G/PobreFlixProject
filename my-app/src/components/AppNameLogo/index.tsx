import { View, StyleSheet, Text } from 'react-native';

export default function Logo(){
    return (
        <View style={styles.container}>
            <Text style={styles.logoTextPre}> 
                Pobre<Text style={styles.logoTextPost}>Flix</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingLeft: 20
    },
    logoTextPre: {
        fontSize: 40,
        fontWeight: 700,
        color: "#fff",
    },
    logoTextPost: {
        color:"#BF3131",
        fontStyle: 'italic'
    }

})