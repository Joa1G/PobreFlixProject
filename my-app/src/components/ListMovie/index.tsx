import { useState, useEffect} from "react";
import { getPopularMovie, getTopRatedMovies, getNewMovies, getUpComingMovies, getExibitionShows, getOnAirShows, getPopularShows, getTopRatedShows } from '../../services/themoviedb.service';
import HorizontalList from '../HorizontalList';
import { Media, Sections } from "../../types/types";
import { FlatList } from "react-native";
import isMovie from "../../modules/isMovie";

export default function ListMovie(){

    const [ moviePopulars, setMoviePopulars] = useState<Media[]>([]);
    const [movieTopRated, setMovieTopRated] = useState<Media[]>([]);
    const [newMovie, setNewMovie] = useState<Media[]>([]);
    const [upComingMovie, setUpComingMovie] = useState<Media[]>([]);
    const [exibitionShow, setExibitionShow] = useState<Media[]>([]);
    const [onAirShow, setOnAirShow] = useState<Media[]>([]);
    const [popularShow, setPopularShow] = useState<Media[]>([]);
    const [topRatedShow, setTopRatedShow] = useState<Media[]>([]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const dataPopularMovies = await getPopularMovie();
                const dataTopRatedMovies = await getTopRatedMovies();
                const dataNewMovies = await getNewMovies();
                const dataUpComingMovies = await getUpComingMovies();
                const dataExibitionShows = await getExibitionShows();
                const dataOnAirShows = await getOnAirShows();
                const dataPopularShows = await getPopularShows();
                const dataTopRatedShows = await getTopRatedShows();

                setMoviePopulars(dataPopularMovies);
                setMovieTopRated(dataTopRatedMovies);
                setNewMovie(dataNewMovies);
                setUpComingMovie(dataUpComingMovies);
                setExibitionShow(dataExibitionShows);
                setOnAirShow(dataOnAirShows);
                setPopularShow(dataPopularShows);
                setTopRatedShow(dataTopRatedShows);

            }catch (error) {
                console.error('Ocorreu um erro na requisição: ', error)
            }
        }
  
        fetchData();
    }, [] )

    const sections = [
        { title: "Filmes Populares", data: moviePopulars},
        { title: "Filmes Bem Avaliados", data: movieTopRated},
        { title: "Filmes em Cartaz", data: newMovie},
        { title: "Filmes em breve", data: upComingMovie},
        { title: "Séries em exibição", data: exibitionShow},
        { title: "Séries que estão no ar", data: onAirShow},
        { title: "Séries populares", data: popularShow},
        { title: "Séries mais bem avaliadas", data: topRatedShow}
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