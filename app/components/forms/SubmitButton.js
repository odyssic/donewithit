import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik';

import AppButton from '../AppButton'

export default function SubmitButton({ title }) {

    const { handleSubmit } = useFormikContext();

    return ( <
        AppButton title = { title }
        backgroundColor = "red"
        onPress = { handleSubmit }
        />
    )
}

const styles = StyleSheet.create({})