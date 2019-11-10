import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';

HomeScreen.navigationOptions = {
  title: 'News一覧',
  };

export default function HomeScreen(props) {
    const [newsList , setlist] = useState([]);

    useEffect(() => {
      let zipcode = 'e2806317470142cba44f9d56d57e8460';
      axios.get(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${zipcode}`)
          .then(function (response) {
            setlist(response.data.articles);
            console.log(newsList);    
          })
          .catch(function (response) {
              console.log(response);
          });
    },[])

  
  
    return (
      <Container>
        <List>
        <FlatList
            data={newsList}
            keyExtractor={(item,index) => item.toString()}
            renderItem={({ item,index }) => (
              <ListItem key={index} onPress={() => props.navigation.navigate('Details')}>
                  <Text>{item.title}</Text>
              </ListItem>
            )}
        />
        </List>
      </Container>
    );
  }
  