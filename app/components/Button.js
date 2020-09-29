import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

export default function Button({ title }) {
    return (
        <View style={styles.button}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: center,
        alignContent: center,
        padding: 100,
        width: '100%',
    },

    text: {
        color: "colors.white",

    }
})
