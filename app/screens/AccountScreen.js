import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from "../components/Screen";
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItem from '../components/lists';
import ListItemSeparator from '../components/lists';



const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]



export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Steven"
                    subTitle="stevenbuddenjr@gmail.com"
                    image={require('../assets/mosh.jpg')}></ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtrator={item => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }

                        />

                    }
                ></FlatList>
            </View>
            <ListItem
                title="Logout"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"
                    />}
            />

        </Screen>
    )
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,

    }
})
