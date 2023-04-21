import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Text, Image, Divider, Icon } from 'react-native-elements';
import NewsDetailsComponent from './NewsDetailsComponent';



const HomeComponent = ({ navigation }:any ) => {
    const [news, setNews] = useState<any[]>([]);
    const [bookmarked, setBookmarked] = useState<any[]>([]);

    useEffect(() => {
        (async ()=>{ const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=0c42002e6ece49c6b29e788e00bcc870')
        const data = await response.json()
        const updatedNews = data.articles.map((item: [])  => ({ ...item, isBookmarked: false }));
        // console.log(updatedNews[0].isBookmarked)
        setNews(updatedNews)
      })()
    }, []);

    const saveBookmark = ({item,index}:any) => {
      item.isBookmarked=(!item.isBookmarked)
      const updatedNews = news
      updatedNews[index].isBookmarked = item.isBookmarked
      setBookmarked(bookmarked => [...bookmarked, item]);
      setNews(updatedNews);
      // pass obj with id and compare that id with news and do delete and add bookmark according to that
    };
  

    const renderItem = ({ item, index }: any) => (
      <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { news: item })}>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>{item.title}</Card.Title>
          <Card.Divider />
          <View style={styles.imageContainer}>
          <Image
              source={
                item.urlToImage
                  ? { uri: item.urlToImage }
                  : require('./images/pic.jpg')
              }
              style={styles.image}
              resizeMode="cover"
            />
          </View> 
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.author}>
            <Text style={styles.authorText}>{item.author}</Text>
            <Text style={styles.publishedAt}>{item.publishedAt}</Text>
            <Divider style={styles.divider} />
            <View>
            <TouchableOpacity style={styles.heartButton} onPress={() => saveBookmark({item,index})}>
              {item.isBookmarked ? (
                <Icon name="heart" type="font-awesome" color="red" />
              ) : (
                <Icon name="heart-o" type="font-awesome" color="white" />
              )}
        </TouchableOpacity>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
    
    return (
      
        <View style={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={styles.headerText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
              <Text style={styles.headerText}>Bookmarks</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.headerText}>Logout</Text>
            </TouchableOpacity>
          </View>

        {news.length > 0  &&
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        }
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name='rowing'  size={24}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name='search' type='font-awesome-5' size={24} color='#FFF' solid />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
          <Icon name='bookmark' type='font-awesome-5' size={24} color='#FFF' solid />
        </TouchableOpacity>
      </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // backgroundColor: 'white',

  },
  card: {
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#1E1E1E',
    borderColor: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#F5F5F5',
  },
  imageContainer: {
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#F5F5F5',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  authorText: {
    fontSize: 14,
    color: '#888',
  },
  publishedAt: {
    fontSize: 14,
    color: '#888',
  },
  heartButton: {
    // position: 'absolute',
    // bottom: 10,
    // right: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  divider: {
    height: 15,
    width: 1,
    backgroundColor: '#888',
    marginHorizontal: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  footer:{
    backgroundColor: '#888',
    flexDirection:"row",
    justifyContent:"space-evenly",
    padding:10
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    // marginTop:15,
    padding:10,
    backgroundColor: '#888',
  },
  headerText:{
    color:"white",
  }
});
  

export default HomeComponent