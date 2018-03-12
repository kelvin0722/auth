import React, { Component } from 'react';
import { Button,Card,CardSection, Input } from './common';
import firebase from 'firebase'
import { Text,View } from 'react-native';

class LoginForm extends Component {
   constructor(props){
       super(props)
      this.state = {
          email:'',
          password:'',
          responseMsg:'',
          showResponseMsg:false

    }
      this.__onSubmit = this.__onSubmit.bind(this)
   }

    __onSubmit(e){
       console.log("loggin in.....")
       const {email,password} = this.state
       let responseMsg; 
       try {
            firebase.auth().signInWithEmailAndPassword(email,password) 
            .then(()=>
            {
                console.log('Resolve executing...')
            })
            .catch(()=>{
                console.log('Reject executing...')
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .catch(()=>this.setState({
                        responseMsg:'Authentication Failed',
                         showResponseMsg:true
                    }))
            })
           
       } catch (error) {
           console.log(error)
       }
        
   }
  render() {
    return (
      <Card >
          <CardSection>
              <Input value={this.state.email}  label="Email" onChangeText={text=>this.setState({email:text})} placeholder="Email" type="nonsecure" />
          </CardSection>

           <CardSection>
              <Input value={this.state.password}  label="Password" onChangeText={text=>this.setState({password:text})} placeholder="Password" type="password" />
          </CardSection>
          <Text>{this.state.responseMsg}</Text>
          <CardSection>
              <Button buttonText={"Login "} onPress={this.__onSubmit} />
          </CardSection>
        
      </Card>
    );
  }
}

export default LoginForm;

const styles = {
    cardStyle:{
       marginTop:100
    },
    textInputStyle:{
        height:20,
        width:100
    },
    responseMsgStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}
