  import React, { Component } from "react";
  import { StyleSheet,TextInput, View, Button, TouchableOpacity,Text } from 'react-native';
  import firebase from '../firebase';
  
  
  export default class Registro extends Component {
    state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('LoginForm'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  

  render() {
    const navegar = this.props.navigation;
    if(this.state.handleLogin){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }   
    return (
      <View style={styles.container1}>
           <TextInput
              placeholder="email" 
              style={styles.input} 
              value={this.state.email}
              onChangeText={email=> this.setState({email})}
               />
  
           <TextInput 
              placeholder="password" 
              style={styles.input}
              secureTextEntry
               value={this.state.password}
               onChangeText={password => this.setState({password})}
               />
  
          
  
           <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSignUp} >
               <Text style={styles.buttonText}>Registrate</Text>
           </TouchableOpacity>
           <Text style= {{alignSelf: "center",}}> Don't have an account? 
           <Text onPress={() => navegar.navigate('Login')} 
           style={{color:'#e93766', fontSize: 18}}> Sign Up </Text></Text>
  
           <Text style={styles.errorText} >
                   {this.state.error}
               </Text>
      </View>
  );
  }
  }
  
  // define your styles
  const styles = StyleSheet.create({
  container1: {
  flex: 1,
  padding:35,
  display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  
  
  },
  
  input:{
  height:40,
  backgroundColor:'rgba(255,255,255,.5)',
  paddingLeft:10,
  marginBottom:15,
  borderRadius:5,
  fontSize:15,
  
  },
  errorText:{
  fontSize:25,
  color:'red',
  alignSelf:'center',
  marginTop:10
  
  },
  buttonText:{
  textAlign:'center',
  color:'#fff',
  fontWeight:'bold',
  fontSize:20
  },
  buttonContainer:{
  backgroundColor:'#3B3B98',
  padding:15,
  borderRadius:8
  }
  });