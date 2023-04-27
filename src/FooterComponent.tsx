import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

const FooterComponent = ({ navigation }:any) => {
  return (
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name='bookmark' type='font-awesome-5' size={24} color='#FFF' solid />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({    
    footer:{
      backgroundColor: '#8888',
      flexDirection:"row",
      justifyContent:"space-evenly",
      padding:10
    },
    
  });

export default FooterComponent