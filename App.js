import React from 'react';

import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AccountScreen from './app/screens/AccountScreen';
import NewListingButton from './app/navigation/NewListingButton';


export default function App() {

    return (
        // <AccountScreen/>
        // <NewListingButton/>
        
        <NavigationContainer theme={NavigationTheme}>
        <AppNavigator/>
        </NavigationContainer>
    )

}