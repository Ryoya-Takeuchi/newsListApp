import React from 'react';
import { 
	View,
	Image,
	StyleSheet,
	Dimensions
 } from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container } from 'native-base';
import * as modules from '../modules/App'

export default function DetailsScreen (props) {

  
	const { params } = props.navigation.state;
	console.log(params.item);
	const win = Dimensions.get('window');

    return (
      <View style={{ flex: 1,backgroundColor:"red" }}>
        <View style={styles.publishedAtArea}>
					{modules.setImage(params.item.urlToImage, win.width , win.height/2.5,0)}
        </View>
        <View style={styles.mainArea}>
					<View style={styles.dateArea}>
						<Text>{params.item.publishedAt}</Text>
					</View>
					<View style={styles.descriptionArea}>
						<Text>{params.item.description}</Text>
					</View>
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
    flex  :1.5,
    backgroundColor : '#a4a4a4'
	},
	dateArea : {
		height :'5%',
		backgroundColor :'red'
	},
	descriptionArea : {
		flex : 1,
		backgroundColor : 'pink'
	}
});

DetailsScreen.navigationOptions = {
  title: "title",
};