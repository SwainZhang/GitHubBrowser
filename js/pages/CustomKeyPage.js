/**
 * Created by emery on 2018/2/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    CheckBox,
    AsyncStorage,
    TouchableNativeFeedback,
    ToastAndroid,
    Dimensions
} from 'react-native';
import NavigationBar from '../component/NavigationBar';

//import CheckBox from 'react-native-check-box';
import Toast, {DURATION} from 'react-native-easy-toast';

var demensions = Dimensions.get('window');
var simeScreen = demensions.width / 2;

export default class CustomKeyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Android', checked: false},
                {name: 'IOS', checked: false},
                {name: 'React Native', checked: false},
                {name: 'Javascript', checked: false},
                {name: 'Java', checked: false}

            ]
        }
    }

    saveCustomKey = () => {
        console.log("保存...");
        try {
            AsyncStorage.setItem('custom_key',JSON.stringify(this.state.data))
            console.log("保存成功="+this.state.data);
            ToastAndroid.show("保存成功",1000);
        }catch (e){
            ToastAndroid.show(e,1000);
        }

    }
    renderRightBtn = () => {
        return (<View style={styles.rightBtn}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this.saveCustomKey}>
                <Text style={{fontSize: 16, color: '#fff',padding:5}}>保存</Text>
            </TouchableNativeFeedback>
        </View>)
    }
    renderCheckBoxRows = () => {
        console.log(`半屏幕宽度=${simeScreen}`);
        return (<View style={styles.cbRowContainer}>
            {this.state.data.map((item, i) => {
                return this.renderSingleCheckbox(item,i)
            })}
        </View>)
    }

    renderSingleCheckbox = (item,i) => {
        return ( <View style={styles.cbWithTitleContainer}>
            <Text style={styles.cbTitle}>{item.name}</Text>
            <CheckBox style={styles.cbKeys} value={item.checked} onValueChange={() => {
                let updateLanguage = item.name;
                let updateStatus = !item.checked;
                let dataSource = [];
                this.state.data.map((a, b) => {
                    let language = a.name;
                    let status = a.checked;
                    if (language === updateLanguage) {
                        status = updateStatus;
                    }
                    dataSource.push({name: language, checked: status})
                });
                this.setState({data: dataSource})
            }}/>
        </View>)
    }

    componentDidMount() {
        AsyncStorage.getItem('custom_key').then(value=>{
            if(value !== null){
                console.log("custom_key="+JSON.parse(value));
                this.setState({data:JSON.parse(value)})
            }else {
                console.log(value)
                ToastAndroid.show(value,1000);
            }
        });
    }
    render() {
        return (<View style={styles.container}>
            <NavigationBar title='自定义分类' rightBtn={this.renderRightBtn()}/>
            <View style={styles.keyContainer}>
                {this.renderCheckBoxRows()}
            </View>

        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rightBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    },
    languageKeys: {
        flexDirection: 'column'
    },
    checkbox: {
        tintColor: '#63B8FF'
    },
    keyContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    cbRowContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cbWithTitleContainer: {
        width: simeScreen,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cbKeys: {

    },
    cbTitle: {
        color:'black'
    }


});