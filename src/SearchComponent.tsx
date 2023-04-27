import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native'
import React ,{useEffect,useState}from 'react'
import FooterComponent from './FooterComponent'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Divider, Icon,  } from 'react-native-elements'
import { Image } from '@rneui/themed';

const SearchComponent = ({navigation}:any) => {

  const [news, setNews] = useState<any[]>([]);

  const handleSearch = (text: any) => {
      fetch(`https://newsapi.org/v2/everything?q=${text}&apiKey=0c42002e6ece49c6b29e788e00bcc870`)
      .then((response)=> response.json())
      .then((Response)=> {
        const updatedNews = Response.articles.map((item: [])  => ({ ...item, isBookmarked: false }));
        console.log(Response.articles[0])
        setNews(updatedNews)
      })
      .catch((error)=>{
        console.log(error)
      });
      
  }

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { news: item })}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>{item.title}</Card.Title>
        <View style={styles.author}>
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
          
          {/* <Divider style={styles.divider} /> */}
          <View>
          {/* <TouchableOpacity style={styles.heartButton} >
            {item.isBookmarked ? (
              <Icon name="heart" type="font-awesome" color="red" />
            ) : (
              <Icon name="heart-o" type="font-awesome" color="white" />
            )}
          </TouchableOpacity> */}
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <TextInput
        style={{ backgroundColor:'white',color:'black',padding:10}}
        placeholder="Search a song"
        onChangeText={handleSearch}
        />
        {news.length > 0  &&
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        }
        {/* <FooterComponent navigation={navigation}/> */}

        </View>
  )
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
    height: 75,
    overflow: 'hidden',
    borderRadius: 10,
    margin:10
  },
  image: {
    // flex: 1,
    height:10,
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
});
export default SearchComponent