import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from "../components/Screen";
import colors from '../config/colors';

export default function AccountScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='format-list-bulleted'
                    color={colors.primary}
                    size={35}></MaterialCommunityIcons>
                <Text>'Test'</Text>
            </View>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='email'
                    color={colors.secondary}
                    size={35}></MaterialCommunityIcons>
                <Text>'Test'</Text>
            </View>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='logout'
                    color='#ffe66d'
                    size={35}></MaterialCommunityIcons>
                <Text>'Test'</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({

    button: {

    },
    container: {


    }

})
