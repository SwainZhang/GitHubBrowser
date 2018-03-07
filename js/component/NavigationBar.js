/**
 * Created by emery on 2018/2/21.
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    Platform,
} from 'react-native'

export default class NavigationBar extends Component {
    render() {
        return (<View style={styles.container}>
            <View style={styles.statusBar}>
                <StatusBar/>
            </View>
            <View style={styles.navBar}>
                <View style={styles.navBtn}></View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.rightBtn}>
                    {this.props.rightBtn}
                </View>


            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#63B8FF',
        padding:5
    },
    statusBar:{
        height:Platform.OS === 'ios' ? 20 : 0
    },
    navBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:30
    },
    titleWrapper:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        bottom:0
    },
    title:{
        fontSize:16,
        color:'#FFF'
    },
    rightBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    },


});