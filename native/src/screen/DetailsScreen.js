import React from 'react';
import { View, Image,StyleSheet } from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';
import * as modules from '../modules/App'

export default function DetailsScreen (props) {

  
  const { params } = props.navigation.state;

  console.log(params.item);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.publishedAtArea}>
          <Text>{params.item.publishedAt}</Text>
        </View>
        <View style={styles.mainArea}>
          {modules.setImage(params.item.urlToImage,100,100)}
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
  publishedAtArea  :{
    flex  :1,
    backgroundColor : 'red'
  },
  mainArea : {
    flex  :20,
    backgroundColor : '#fefefe'
  }
});

DetailsScreen.navigationOptions = {
  title: "title",
};