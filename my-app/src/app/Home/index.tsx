import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import Header  from "../../components/Header";
import ListMovie from '../../components/ListMovie';
import { styles } from "./styles"
import { useState } from 'react';

export default function Home() {

  const [ filter, setFilter ] = useState< 'all' | 'movies' | 'series'>('all');

  return (
    <SafeAreaView style={styles.container}>
      <Header onChangeFilter={setFilter} />
      <ListMovie filter={filter} />

      <StatusBar style='light' backgroundColor='#27548A'/>
    </SafeAreaView>
  );
}