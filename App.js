import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';

export default function App() {
    return (

        <Screen>
            <Icon name='email' size={50} backgroundColor='red' iconColor='white'></Icon>
        </Screen>

    )
}