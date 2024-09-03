import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, /*expande na tela toda*/ 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

/*a teg StatusBar para que a tela n passe da barra de notificaçao.*/
/* */