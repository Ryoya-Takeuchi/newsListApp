import React from 'react';
import {
  View,
  FlatList
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';

export default function DetailsScreen () {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
}

DetailsScreen.navigationOptions = {
  title: '詳細画面',
};
  