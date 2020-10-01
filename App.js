import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
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
import ListingsScreen from './app/screens/ListingsScreen';
import { TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
    const [firstName, setFirstName] = useState('');

    return (

        <Screen>
            <AppTextInput placeholder="Username" icon="email" />
        </Screen>

    )
}