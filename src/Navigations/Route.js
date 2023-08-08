// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../Screens/MainScreen';
import AuthLogin from '../Screens/Auth/AuthLogin';
import AuthSignup from '../Screens/Auth/AuthSignup';
const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
      
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name="AuthLogin" component={AuthLogin} options={{headerShown: false}}/>
      <Stack.Screen name="AuthSignup" component={AuthSignup} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;