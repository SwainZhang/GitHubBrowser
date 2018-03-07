/**
 * Created by emery on 2018/2/23.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ProjectRow extends Component{
    constructor(props){
        super(props);

    }
render(){
        var item = this.props.item;
        return (<View style={styles.container}>
            <Text style={styles.title}>{item.full_name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.bottom}>
                <View style={styles.bottomTextWrapper}>
                    <Text >作者：</Text>
                    <Image style={{width:22,height:22}} source={{uri:item.owner.avatar_url}}></Image>
                </View>
                <View style={styles.bottomTextWrapper}>
                    <Text >Stars：</Text>
                    <Text>{item.stargazers_count}</Text>
                </View>

                <Image style={{width:22,height:22}} source={require('../../res/images/ic_unstar_transparent.png')}></Image>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'column',
        padding:10,
        marginLeft:5,
        marginRight:5,
        marginVertical:5,
        borderColor:'#dddddd',
        borderWidth:0.5,
        borderRadius:4,
        elevation:4
    },
    title:{
        fontSize:16,
        marginBottom:2,
        color:'#212121'
    },
    description:{
        fontSize:14,
        marginBottom:2,
        color:'#757575'
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    bottomTextWrapper:{
        flexDirection:'row'
    }

});