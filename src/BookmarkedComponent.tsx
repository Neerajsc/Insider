import { View, Text,StyleSheet,ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComponent from './HeaderComponent';
import Footer from './FooterComponent';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Divider, Icon, Image, } from 'react-native-elements';

const BookmarkedComponent = ({route,navigation}:any) => {
    const bookmarked= route.params.bookmarked
    useEffect(()=>{
        console.log(bookmarked[0].item.urlToImage)
        // console.log(bookmarked)
    })

    const renderItem = ({ item, index }: any) => (
      
        <TouchableOpacity onPress={() => navigation.navigate('NewsDetails', { news: item.item })}>
          <Card containerStyle={styles.card}>
            <Card.Title style={styles.title}>{item.item.title}</Card.Title>
            <Card.Divider />
            <View style={styles.imageContainer}>
            <Image
                source={
                  item.item.urlToImage
                    ? { uri: item.item.urlToImage }
                    : require('./images/123.png')
                }
                style={styles.image}
                resizeMode="cover"
                PlaceholderContent={<ActivityIndicator />}
              />
            </View> 
            <Text style={styles.description}>{item.item.description}</Text>
            <View style={styles.author}>
              <Text style={styles.authorText}>{item.item.author}</Text>
              <Text style={styles.publishedAt}>{item.item.publishedAt}</Text>
              <Divider style={styles.divider} />
              <View>
              <TouchableOpacity style={styles.heartButton} onPress={() => console.log("first")}>
                {item.item.isBookmarked ? (
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

          
        <HeaderComponent />
        {bookmarked.length > 0  &&
        <FlatList
          data={bookmarked}
          renderItem={renderItem}
          keyExtractor={(item,index) => index.toString()}
          contentContainerStyle={styles.flatListContent}
        />
        }
        
        {/* <Text>{bookmarked[0].item}</Text> */}
        <Footer navigation={navigation}/>

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

export default BookmarkedComponent