import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/HomeComponent';
import NewsDetails from './src/NewsDetailsComponent';

const Stack = createStackNavigator();

import Login from './src/LoginComponent';

function App(): JSX.Element {
  return (
    <>
    {/* <Login/> */}
      
      {/* <HomeComponent/> */}
      {/* <NewsDetailsComponent/> */}

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


export default App;
