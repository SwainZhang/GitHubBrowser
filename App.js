/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import HomePage from "./js/pages/HomePage";
import MinePage from "./js/pages/MinePage";
import CustomeKey from "./js/pages/CustomKeyPage";
import {StackNavigator} from 'react-navigation';

export const Navigator = StackNavigator({
    Home: {
        screen: HomePage,
        navigationOptions:{
            header:null
        }
    },
    Mine:{
        screen : MinePage,
        navigationOptions:{
            header:null
        }

    },
    Custom:{
        screen:CustomeKey,
        navigationOptions:{
            header:null
        }
    }

});

export default  class GitHub extends Component {

    render() {
       return <Navigator/>
    }


}





