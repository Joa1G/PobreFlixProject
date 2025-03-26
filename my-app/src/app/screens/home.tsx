import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, FlatList} from 'react-native';
import { homeStyle } from '../styles/homeStyle';
import { useEffect, useState } from 'react';
import { Media, Sections } from "../../../types/types";
import Header  from "../../components/header";
import { getPopularMovie, getTopRatedMovies } from '../../../services/themoviedb.service';
import HorizontalList from '../../components/HorizontalList';

export default function App() {

  const [ moviePopulars, setMoviePopulars] = useState<Media[]>([]) //list movie
  const [movieTopRated, setMovieTopRated] = useState<Media[]>([])
  const [newMovie, setNewMovie] = useState<Media[]>([])

  //carregar lista
  useEffect( () => {
      const fetchData = async () => {
        const dataMedia = await getPopularMovie();
        const dataNewMovies = await getTopRatedMovies();

        setMoviePopulars(dataMedia);
        setMovieTopRated(dataNewMovies);
      }

      fetchData();
  }, [] )

  const sections: Sections[] = [
    { title: "Filmes Populares", data: moviePopulars},
    { title: "Filmes Bem Avaliados", data: movieTopRated}
  ]

  const renderList = ({item}: {item:Sections}) => (
      <HorizontalList title={item.title} data={item.data}/>
  );

  return (
    <SafeAreaView style={homeStyle.mainContainer}>
      <Header/>
      <FlatList
      data={sections}
      renderItem={renderList}
      keyExtractor={(item)=>item.title}
      />
    
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}