import React ,{useState} from 'react';
import { Text, TextInput, View  } from 'react-native';
import Card from './app/components/Card'
import ListingsDetailsScreen from './app/screens/ListingsDetailsScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextIpnput from './app/components/AppTextIpnput';

export default function App() {

  return (
    <Screen>
    <AppTextIpnput  icon="email" placeholder="Username"/>
    
    </Screen>
  );
  
 }

 

