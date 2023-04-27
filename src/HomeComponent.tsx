import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Text, Divider, Icon } from 'react-native-elements';
import NewsDetailsComponent from './NewsDetailsComponent';
import { Image } from '@rneui/themed';
import Footer from './FooterComponent';
import HeaderComponent from './HeaderComponent';



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

    const searchIndex= (index : string)=>{
      for (let i = 0; i < bookmarked.length; i++) {
        const obj = bookmarked[i];
        if(obj.index==index){
          return true;
        }
      }
      return false;
    }

    const saveBookmark = ({item,index}:any) => {

      if(searchIndex(index)){
          // console.log(item.publishedAt)
          // console.log("found data")
          const updatedNews = news
          updatedNews[index].isBookmarked = (!item.isBookmarked)
          setNews(updatedNews);
          const newArray = [...bookmarked];
          const a = newArray.filter( elements =>elements.item.publishedAt != item.publishedAt );
          setBookmarked(a);
      }else{
        item.isBookmarked=(!item.isBookmarked)
        const updatedNews = news
        updatedNews[index].isBookmarked = item.isBookmarked
        setBookmarked(bookmarked => [...bookmarked, {item,index}]);
        setNews(updatedNews);
      }
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
                  : require('./images/123.png')
              }
              style={styles.image}
              resizeMode="cover"
              PlaceholderContent={<ActivityIndicator />}
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

          
        <HeaderComponent navigation={navigation}/>
        {news.length > 0  &&
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        }
        <Footer navigation={navigation}/>

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
    margin:10
  },
  image: {
    // flex: 1,
    height:"100%",
    width:"100%"
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