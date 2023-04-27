import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/HomeComponent';
import NewsDetails from './src/NewsDetailsComponent';
import Search from './src/SearchComponent';

const Stack = createStackNavigator();

import Login from './src/LoginComponent';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Profile from './src/ProfileComponent';
import UpdatePassword from './src/UpdatePasswordComponent';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="NewsDetails" component={NewsDetails} options={{headerShown:false}}/>
          <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} options={{headerShown:false}}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      </>
    </Provider>
  );
}


export default App;
