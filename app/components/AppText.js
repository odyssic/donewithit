import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

import defaultStyles from '../config/styles'

export default function AppText({ children, style, ...otherProps }) {
    return (
        <Text {...otherProps} style={[defaultStyles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})
