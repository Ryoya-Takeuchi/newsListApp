import React from 'react';
import { 
	View,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView
 } from 'react-native';
 import { Icon,Button,Text,List, ListItem,Container,Left,Right,Body,Header,Content,Title } from 'native-base';
import axios from 'axios';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as modules from '../modules/App'

export default function DetailsScreen (props) {
	const { params } = props.navigation.state;
	const win = Dimensions.get('window');

    return (
			<Container>
				<Header>
          <Left>
						<Button 
							style={{alignItems : "center",justifyContent: 'center',}} 
							transparent iconLeft 
							onPress={() => props.navigation.navigate('Home')}
						>
              <Icon name='arrow-back'/>
							<Text>戻る</Text>
            </Button>
          </Left>
          <Body>
						<Title>詳細</Title>
          </Body>
          <Right />
        </Header>
				<ScrollView>
					<Content>
							<View style={{ flex: 1}}>
								<View>
									<Text style={styles.titleText}>{params.item.title}</Text>
										{modules.editDate(params.item.publishedAt)}
								</View>
								<View style={styles.publishedAtArea}>
										{modules.setImage(params.item.urlToImage, win.width , win.height/2.5,0)}
								</View>
								<View style={styles.mainArea}>
									<View style={styles.descriptionArea}>
										<Text style={styles.descriptionText}>{params.item.description}</Text>
									</View>
								</View>
							</View>
					</Content>
				</ScrollView>
			</Container>
    );
}

const styles = StyleSheet.create({
  publishedAtArea  :{
    flex  :1,
  },
  mainArea : {
    flex  :1.5
	},
	dateArea : {
		height :Dimensions.get('window').width/15,
		backgroundColor :'#FFF',
	},
	descriptionArea : {
		flex : 1
	},
	dateText : {
		fontSize: RFValue(10),
		margin: '3%',
	},
	titleText : {
		fontSize: RFValue(17),
		backgroundColor : '#f5f5f5',
		margin: '3%',
	},
	descriptionText : {
		fontSize: RFValue(17),
		margin: '3%',
	}
});

DetailsScreen.navigationOptions = {
  title: '詳細',
};