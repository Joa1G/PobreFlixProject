import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Media } from "../../types/types";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { getDetailsMediaMovies} from "../../services/themoviedb.service";
import { styles } from "./styles";
import  Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function DetailsMovie() {

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [ media, setMedia ] = useState<Media | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                
                const dataMedia = await getDetailsMediaMovies( Number(id) );

                setMedia(dataMedia);
                
            } catch (error) {
                console.error('Ocorreu um erro na requisição: ', error);
            }

        }

        fetchData();
    }, [ id ]  );

    const formatRuntime = (minutes: number) => {

        const hour = Math.floor( minutes / 60 );
        const ramainingMinutes = (minutes % 60);

        return `${hour}h e ${ramainingMinutes}min`

    }

    const formatCurrency = (value: number) => {
        return value.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })
    }

    const handleNavigationBack = () => {
        router.back();
    }
    
    return (
        <ScrollView style={ styles.containerDetails } >
            <StatusBar style="light" backgroundColor="#27548A"/>
            
            {/*  Container Image */}
            <View style={ styles.imageContainer } >
                <Image style={ styles.posterImage } resizeMode="cover" source={ { uri: `${BASE_IMAGE_URL}${media?.poster_path}` } } />
                
                <LinearGradient style={ styles.gradient } colors={["rgba(10, 15, 26, 0)", "rgba(10, 15, 26, 0.9)"]} />

                <TouchableOpacity style={ styles.buttonReturn } onPress={ handleNavigationBack } >
                    <Ionicons name="arrow-back" color="#fff" size={24}  />
                </TouchableOpacity>

            </View>

            {/* Informações do filme */}
            <View style={ styles.detailsContent } >

                {/* Principais Informações */}    
                <View>
                    <Text style={ styles.infoTitle } >{ media?.title || media?.name }</Text>

                    <View style={ styles.infoMedia } >
                        <Text style={ styles.infoDate } >
                            { media?.release_date?.substring(0,4) } - {" "} { media?.runtime ? formatRuntime(media.runtime) : 'N/A' }
                        </Text>

                        <View style={ styles.rating } >
                            <Ionicons name="star" color="#FFD700" size={16} />
                            <Text style={ styles.ratingText } >{(media?.vote_average)?.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>

                {/* Sinopse */}
                <View style={ styles.sinopseContainer } >
                    <Text style={ styles.titleInfo } >Sinopse</Text>
                    <Text style={ styles.textSinopse } >{ media?.overview ? media.overview : 'N/A' }</Text>
                </View>

                {/* Outras Informações */}
                <View style={ styles.otherInfoContainer } >
                    <Text style={ styles.titleInfo } >Detalhes</Text>
                    <Text style={ styles.otherInfoText } >Data de lançamento: {media?.release_date}</Text>
                    <Text style={ styles.otherInfoText } >Orçamento: { media?.budget ? formatCurrency(media.budget) : 'N/A' } </Text>
                    <Text style={ styles.otherInfoText } >Receita: { media?.revenue ? formatCurrency(media.revenue) : 'N/A' } </Text>
                    <Text style={ styles.otherInfoText } >Status: { media?.status ? media.status : 'N/A' } </Text>
                    <Text style={ styles.otherInfoText } >Idioma Original: { media?.original_language ? media.original_language : 'N/A' } </Text>
                </View>

            </View>


        </ScrollView>
    )

}