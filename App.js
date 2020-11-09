import React from 'react';

import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountScreen from './app/screens/AccountScreen';


export default function App() {

    return (
        <AccountScreen/>
        
        // <NavigationContainer theme={NavigationTheme}>
        // <AppNavigator/>
        // </NavigationContainer>
    )

}