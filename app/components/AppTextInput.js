import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput, StyleSheet, View, Text, Platform } from 'react-native';

import defaultStyles from '../config/styles'

import colors from '../config/colors';

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text} {...otherProps} />
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10,

    },

    icon: {
        margin: 10,

    }

})

