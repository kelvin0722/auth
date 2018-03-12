import React, { Component } from 'react';
import { View} from 'react-native';
import {Header } from './common';
import firebase from 'firebase';

import config from '../../config';
import LoginForm from './LoginForm';


class AppContainer extends Component {
async componentWillMount(){
    await firebase.initializeApp(config)
}
  render() {
    return (
      <View>
        <Header headerTitle={"Authentication"} />
        <LoginForm/>
      </View>
    );
  }
}

export default AppContainer;
