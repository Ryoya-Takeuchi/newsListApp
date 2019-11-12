import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";   //ネットワークテスト
import Toast, {DURATION} from 'react-native-easy-toast'  //トースト
import { API_KEY, ANOTHER_CONFIG } from 'react-native-dotenv'

HomeScreen.navigationOptions = {
  title: 'News一覧',
  };

export default function HomeScreen(props) {
    const [newsList , setlist] = useState([]);

    useEffect(() => {
      console.log(API_KEY);
      NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
      });

      axios.get(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`)
          .then(function (response) {
            console.log(response.data.articles);
            setlist(response.data.articles);
            response.data.articles.map(( news,index) => {
              try {
                storeData(index , news);
                getData(index)
                this.refs.toast.show('hello world!');
              } catch (e) {
                // saving error
              } 
            })
            
          })
          .catch(function (response) {
              console.log(response);
          });
    },[])

    
    storeData = async (index , news) => {
      try {
        await AsyncStorage.setItem(index.toString(), news.title)
      } catch (e) {
        // saving error
      }
    }

    getData = async (index) => {
      try {
        const value = await AsyncStorage.getItem(index.toString())
        if(value !== null) {
          console.log(index,value);
        }
      } catch(e) {
        // error reading value
      }
    }


  
  
    return (
      <Container>
        <List>
        <FlatList
            data={newsList}
            keyExtractor={(item,index) => item.toString()}
            renderItem={({ item,index }) => (
              <ListItem key={index} onPress={() => props.navigation.navigate('Details')}>
                  <Text>{item.title}</Text>
                  <Toast ref="toast"/>
              </ListItem>
            )}
        />
        </List>
      </Container>
    );
  }
  