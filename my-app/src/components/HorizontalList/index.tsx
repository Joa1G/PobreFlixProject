import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Media, Sections } from "../../types/types";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import isMovie from "../../modules/isMovie";

type HorizontalListProps = {
    sections: Sections
}

const BASE_IMAGE = 'https://image.tmdb.org/t/p/w200'

export default function HorizontalList( {sections}:HorizontalListProps ){

    const router = useRouter();

    const handleNavigationDetails = (id: number) => {
        if (isMovie(sections.title)){
            router.push(`/DetailsMovies/${id}`)
        }else{
            router.push(`DetailsShows/${id}`)
        }
    }
    
    const renderItem = ({item}: {item:Media}) => (
        <TouchableOpacity style={styles.item} onPress={() => handleNavigationDetails(item.id)} >
            <Image style={styles.itemImage }resizeMode="cover" source={{ uri: `${BASE_IMAGE}${item.poster_path}` }}/>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}> {item.name || item.title} </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}> { sections.title } </Text>

            <FlatList 
            data={sections.data}
            renderItem={ renderItem }
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={ styles.list }
            snapToAlignment="start"
            decelerationRate={"fast"}
            snapToInterval={155}
            />
        </View>

        
    );
}