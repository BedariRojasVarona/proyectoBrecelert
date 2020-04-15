import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import BG from '../images/bg.png'
import Registro from './Registro';

// create a component
const LoginForm = () => {
    return (
        <View style={styles.container}>

            <View style={styles.emailAndPassword}>
            <ImageBackground style={styles.container4} source={BG} >
                <Registro/>
           </ImageBackground>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
       
       
    },

    logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    emailAndPassword:{
        flex:2
    },
    container4: {
        flex: 1,
        justifyContent: 'center',
        height:'100%',
        width:'100%'
     
      
      }
});

//make this component available to the app
export default LoginForm;