import React from 'react';
import {StyleSheet} from 'react-native';
import SearchNews from './src/modules/SearchNews/SearchNews.screen';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <SearchNews />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
