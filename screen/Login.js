import React, { Component } from 'react';
import { StyleSheet, View, TextInput,Alert, ActivityIndicator,TouchableOpacity,Text } from 'react-native';
import firebase from '../firebase';
//import BG from '../images/bg.png';


class Login extends Component {

state = {
  email: "",
  password: "",
  errorMessage: null
};

handleLogin = () => {
  const {email, password} = this.state;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => this.setState({
      errorMessage: error.message}));

};
onLoginSuccess =  () =>{
  this.setState({
      error:'',
      loading:false
  })
}

render() {
  const navegar = this.props.navigation;
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

        

         <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin} >
             <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
         <Text style= {{alignSelf: "center",}}> Don't have an account? 
         <Text onPress={() => navegar.navigate('RegistroForm')} 
         style={{color:'#e93766', fontSize: 18}}>
            Sign Up </Text></Text>

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
  
/*const styles = StyleSheet.create({
container: {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 35,
  backgroundColor: '#fff'
},
inputStyle: {
  width: '100%',
  marginBottom: 15,
  paddingBottom: 15,
  alignSelf: "center",
  borderColor: "#ccc",
  borderBottomWidth: 1
},
loginText: {
  color: '#3740FE',
  marginTop: 25,
  textAlign: 'center'
},
preloader: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff'
},
    container1: {
      flex: 1,
      justifyContent: 'center',
      height:'100%',
      width:'100%'
   
    
    }
});*/

//make this component available to the app
export default Login;
  