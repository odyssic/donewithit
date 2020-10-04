import React from 'react';
import { StyleSheet, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton'
import AppText from '../components/AppText';
import defaultStyles from '../config/styles'
import ErrorMessage from '../components/ErrorMessage';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField';

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
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}

            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
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

                        <AppButton
                            title="Login"
                            backgroundColor="red"
                            onPress={handleSubmit}
                        />
                    </>
                )}

            </Formik>

        </Screen>
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
