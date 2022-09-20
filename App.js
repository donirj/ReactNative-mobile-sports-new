import Navigation from "./src/Navigation";
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import {colors} from './constants/colors'

export default function App() {

  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf')
  })
  
  if(!loaded){
    //si las fuentes no cargan, voy a añadir un contenedor
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.primary}/>
      </View>
    )
  }

  return (<Navigation/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});