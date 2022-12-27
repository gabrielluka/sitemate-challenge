import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Article} from '../modules/SearchNews/news.types';

interface CardInterface {
  article: Article;
}

const CardItem = ({article}: CardInterface) => (
  <Card style={styles.container}>
    <Card.Cover source={{uri: article.urlToImage}} />
    <Card.Title title={article.author} subtitle={article.description} />
    <Card.Content>
      <Title>{article.title}</Title>
      <Paragraph>{article.content}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default CardItem;
