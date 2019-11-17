import React,{useState,useEffect} from 'react';
import {
  View,
  FlatList,
	Image,
	Dimensions,
	StyleSheet
} from 'react-native';
import axios from 'axios';
import { Icon,Button,Text,List, ListItem,Container,Left,Right,Body } from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const setImage = (image,w,h,borderR) => {
    if(image != null) {
        return (
            <Image
              style={{width : w,height : h,borderRadius : borderR , borderWidth : 1,borderColor : '#c5c5c5'}}
              source={{uri: image}}
            />
        )
    }else {
        return (
            <Image
              style={{width :w,height : h,borderRadius : borderR , borderWidth : 1,borderColor : '#c5c5c5'}}
              source={require('../Images/noimage.png')}
            />
        )
    }
}

const editDate = (date) => {
	const result = {};
	let saveDate = date.split("T");
	result.date = saveDate[0];
	return (
		<Text style={styles.dateText}>{result.date}</Text>
	);
}



export {
		setImage,
		editDate
}


const styles = StyleSheet.create({
	dateText : {
		fontSize: RFValue(10),
		marginLeft: '3%',
		marginBottom : '1%'
	},
});
