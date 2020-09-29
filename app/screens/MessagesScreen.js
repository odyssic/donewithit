import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants';

console.log(Constants)

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }

]

export default function MessagesScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <FlatList
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({ item }) => <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    ></ListItem>} />

            </View >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
