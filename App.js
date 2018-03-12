import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/AppContainer';


const App = () =>(
 <View style={styles.container}>
   <AppContainer/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});


export default App;
