/**
 * Created by emery on 2018/2/21.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native';
import HomePage from "./js/pages/HomePage";

export default class Popular extends Component{
    render(){
        return (<View style={styles.container}>
           <HomePage/>
        </View>)
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
