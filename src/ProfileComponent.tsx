import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Footer from './FooterComponent'
import HeaderComponent from './HeaderComponent';
import { Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

type user = {
    userName: string;
    password:string;
  };

const ProfileComponent = (props:any) => {
  return (
    <>
      
      <HeaderComponent navigation={props.navigation}/>
      
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
        />
      </View>
      <Text style={styles.username}>{props.userName}</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('UpdatePassword')}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
        </View>
      
      <Footer navigation={props.navigation}/>
      
       
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white"
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

const mapStateToProps = (state: any) => {
    return {
      
      userName: state.userName,
      password:state.password
    };
  };

export default connect(mapStateToProps)(ProfileComponent);

