/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createAppContainer,createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import HomeScreen from './screen/HomeScreen'
import DetailsScreen from './screen/DetailsScreen'

const RootStack = createAnimatedSwitchNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
	{
		initialRouteName: 'Home',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={200}
          interpolation="easeIn"
        />
				<Transition.In 
				type="slide-right"
				durationMs={200}
				interpolation="easeOut" />
      </Transition.Together>
    ),
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
    return <AppContainer />;
}