import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { Media, Sections } from "../../../types/types";
import { styles } from "./styles";

type HorizontalListProps = {
    title: string,
    data: Media[]
}

const BASE_IMAGE = 'https://image.tmdb.org/t/p/w200'

export default function HorizontalList( {title, data}:HorizontalListProps ){
    
    const renderItem = ({item}: {item:Media}) => (
        <TouchableOpacity style={styles.item}>
            <Image style={styles.itemImage }resizeMode="cover" source={{ uri: `${BASE_IMAGE}${item.poster_path}` }}/>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}> {item.name || item.title} </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}> { title } </Text>
            <FlatList 
            data={data}
            renderItem={ renderItem }
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>

        
    );
}