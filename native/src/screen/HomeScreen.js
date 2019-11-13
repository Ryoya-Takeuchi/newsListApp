import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList,
  Image
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container,Left,Right,Body } from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";   //ネットワークテスト
import Toast, {DURATION} from 'react-native-easy-toast'  //トースト
import { API_KEY } from 'react-native-dotenv'
import * as modules from '../modules/App'

HomeScreen.navigationOptions = {
  title: 'News一覧',
  };

export default function HomeScreen(props) {
    const [newsList , setlist] = useState([]);

    useEffect(() => {
      // console.log(API_KEY);
      // NetInfo.fetch().then(state => {
      //   console.log("Connection type", state.type);
      //   console.log("Is connected?", state.isConnected);
      // });

      axios.get(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`)
          .then(function (response) {
            setlist(response.data.articles);
            response.data.articles.map(( news,index) => {
              try {
                // storeData(index , news);
                // getData(index)
                // this.refs.toast.show('hello world!');
              } catch (e) {
                // saving error
              } 
            })
            
          })
          .catch(function (response) {
              console.log(response);
          });
    },[])

    
    const storeData = async (index , news) => {
      try {
        await AsyncStorage.setItem(index.toString(), news.title)
      } catch (e) {
        // saving error
      }
    }

    const getData = async (index) => {
      try {
        const value = await AsyncStorage.getItem(index.toString())
        if(value !== null) {
          // console.log(index,value);
        }
      } catch(e) {
        // error reading value
      }
		} 
  
    return (
      <Container>
        <List style={{flex:1}}>
        <FlatList
						style={{flex :1}}
            data={newsList}
            keyExtractor={(item,index) => item.toString()}
            renderItem={({ item,index }) => (
              <ListItem thumbnail style={{marginLeft :-5}} onPress={() => props.navigation.navigate('Details',{item : item})}>
                  <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                  </Body>
                  <Right>
                    {modules.setImage(item.urlToImage,70,70)}
                  </Right>
                  <Toast ref="toast"/>
              </ListItem>
            )}
        />
        </List>
      </Container>
    );
  }
  