import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={image}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}></Image>

                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>


                <AppButton title="Login" />
                <AppButton title="Register" color="secondary" />

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        alignContent: "center"


    },

    buttonContainer: {

        padding: 20,
        width: "100%",
        alignContent: "center",
        margin: 10,

    },

    logo: {

        width: 100,
        height: 100,
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",

    },

    tagLine: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 20,
    }


});



