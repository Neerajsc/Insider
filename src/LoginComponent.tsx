import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import {responsiveHeight, responsiveWidth, responsiveFontSize,} from 'react-native-responsive-dimensions';

const Login = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("./images/news.png")}/>
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />
      <Button
              title="Login"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                
                width: "40%",
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />

        <Text style={styles.registerStyle}>Not Registered! click here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2196f3',
    marginTop: 20,
  },
  logo:{
        height:responsiveHeight(10),
        width:responsiveWidth(15),
        marginBottom: 60
  },
  registerStyle:{
    color:"#ff8000",
    padding:20,
    fontSize:responsiveFontSize(2)
  }
});

export default Login;
