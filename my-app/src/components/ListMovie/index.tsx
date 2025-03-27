import { useState, useEffect} from "react";
import { getPopularMovie, getTopRatedMovies, getNewMovies } from '../../services/themoviedb.service';
import HorizontalList from '../HorizontalList';
import { Media, Sections } from "../../types/types";
import { FlatList } from "react-native";

export default function ListMovie(){

    const [ moviePopulars, setMoviePopulars] = useState<Media[]>([]);
    const [movieTopRated, setMovieTopRated] = useState<Media[]>([]);
    const [newMovie, setNewMovie] = useState<Media[]>([]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const dataMedia = await getPopularMovie();
                const dataTopRatedMovies = await getTopRatedMovies();
                const dataNewMovies = await getNewMovies();

                setMoviePopulars(dataMedia);
                setMovieTopRated(dataTopRatedMovies);
                setNewMovie(dataNewMovies);
            }catch (error) {
                console.error('Ocorreu um erro na requisição: ', error)
            }
        }
  
        fetchData();
    }, [] )

    const sections = [
        { title: "Filmes Populares", data: moviePopulars},
        { title: "Filmes Bem Avaliados", data: movieTopRated},
        { title: "(Novos) Filmes nos Cinemas", data: newMovie},
      ]
    
      const renderSection = ({item}: {item:Sections}) => (
          <HorizontalList sections={ item }/>
      );

    return(
        <FlatList
        data={ sections }
        renderItem={renderSection}
        keyExtractor={ (item) => item.title }
        />
    );
}