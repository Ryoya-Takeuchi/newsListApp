import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';


export default function SignInScreen(props) {

    const _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        props.navigation.navigate('App');
      };

      return (
        <View style={styles.container}>
          <Button title="Sign in!" onPress={_signInAsync} />
        </View>
      );
  
   
  }

SignInScreen.navigationOptions = {
    title: 'login画面',
};