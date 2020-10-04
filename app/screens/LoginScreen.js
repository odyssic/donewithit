import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';


import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />

            <AppForm
                initialValues={{ email: "", password: "", }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}

            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="password"
                    secureTextEntry
                    textContentType="password"

                />

                <SubmitButton
                    title="Login"

                />


            </AppForm>
        </Screen >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,


    }
})
