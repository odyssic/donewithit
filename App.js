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
import ListItem from './app/components/ListItem';

export default function App() {
    return (

        <Screen>
            <ListItem
                title='my Title'
                subTitle="subtitle"
                ImageComponent={<Icon name='email' />}
            ></ListItem>
        </Screen>

    )
}