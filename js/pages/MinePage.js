/**
 * Created by emery on 2018/2/22.
 */
import React,{Component} from 'react';
import {

    StyleSheet,
    View,
    Text,

} from 'react-native';
import NavigationBar from '../component/NavigationBar';


export default class MinePage extends Component{

    render(){
        const {navigate} = this.props.navigation;
        return (<View style={styles.container}>
            <NavigationBar title='我的'/>
            <View style={{flexDirection:'column',alignItems:'center',marginTop:30}}>
                <Text style={{fontSize:30,backgroundColor:'orange'}} onPress={()=>{navigate('Custom')}}>自定义分类</Text>
            </View>
        </View>)
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f00"
    }
});