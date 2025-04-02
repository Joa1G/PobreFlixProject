import { StatusBar } from 'expo-status-bar';
import { SafeAreaView} from 'react-native';
import Header  from "../../components/Header";
import ListMovie from '../../components/ListMovie';
import { styles } from "./styles"

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ListMovie/>

      <StatusBar style='light' backgroundColor='#27548A'/>
    </SafeAreaView>
  );
}