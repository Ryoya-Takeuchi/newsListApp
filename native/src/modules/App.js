import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList,
  Image
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container,Left,Right,Body } from 'native-base';


const setImage = (image,w,h) => {
    if(image != null) {
        return (
            <Image
              style={{width : w,height : h,borderRadius : 20,borderWidth : 1,borderColor : '#c5c5c5'}}
              source={{uri: image}}
            />
        )
    }else {
        return (
            <Image
              style={{width :w,height : h,borderRadius : 20,borderWidth : 1,borderColor : '#c5c5c5'}}
              source={require('../Images/noimage.png')}
            />
        )
    }
}



export {
    setImage
}