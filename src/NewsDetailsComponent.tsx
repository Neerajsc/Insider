import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FooterComponent from './FooterComponent';



const NewsDetailsComponent = ({ route,navigation }:any) => {
   let {news} = route.params

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.newsContainer}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.author}>By {news.author}</Text>
        <Text style={styles.publishedAt}>{new Date(news.publishedAt).toDateString()}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.content}>{news.content}</Text>
      </View>
      <FooterComponent navigation={navigation}/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  backButton: {
    backgroundColor: '#1a1a1a',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 80,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  publishedAt: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#fff',
  },
});

export default NewsDetailsComponent;
