import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { useAppSelector } from '../../../hooks'
//import Details from '../details/Details';
import Login from '../login/Login'
import DrawerNavigator from './DrawerNavigator'
import i18n from 'i18n-js';
import translations from '../../../assets/locale';
import { setLocaleAsUpdated } from '../../actions';

const Stack = createStackNavigator()

i18n.translations = translations;
i18n.fallbacks = true;

const AppNavigator = () => {
  const user = useAppSelector(state => state.user)
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {(user.Token === null)
            && <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
          {(user.Token !== null)
            && <Stack.Screen name='root' component={DrawerNavigator} options={{ headerShown: false }} />}
          {(user.Token !== null)
            && <Stack.Screen name='Details' component={Login} options={{ headerShown: false }}/>}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default AppNavigator;