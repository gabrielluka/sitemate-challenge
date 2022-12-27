import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import CardItem from '../../components/CardArticle';
import {useGetNewsByText} from './news.hooks';

const SearchNewsScreen = () => {
  const [valueSearch, SetValueSearch] = useState('');
  const {getNews, news, isLoading} = useGetNewsByText(state => state);

  const SearchNews = () => {
    getNews(valueSearch);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onIconPress={SearchNews}
        onChangeText={SetValueSearch}
        value={valueSearch}
      />

      {isLoading ? (
        <ActivityIndicator style={styles.container} size="large" />
      ) : (
        <FlatList
          keyExtractor={(item, index) =>
            `${item.source.id}${item.source.name}${index}`
          }
          maxToRenderPerBatch={5}
          initialNumToRender={6}
          data={news?.articles}
          renderItem={({item}) => <CardItem article={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchNewsScreen;
