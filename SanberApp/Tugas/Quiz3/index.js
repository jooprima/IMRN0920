import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './LoginScreen';
import Register from './Register';
import Splash from './Splash';
import Home from './Home';

const AppStack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='Splash'>
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <AppStack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default index;
