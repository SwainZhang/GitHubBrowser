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

} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import PopularPage from '../pages/PopularPage';
import MinePage from '../pages/MinePage';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'popular'
        }
    }

    render() {
        return (<View style={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'popular'}
                    selectedTitleStyle={{color: '#63b8ff'}}
                    title="最热"
                    onPress={() => this.setState({selectedTab: 'popular'})}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('../../res/images/ic_popular.png')}></Image>}
                    renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#63b8ff'}]}
                                                     source={require('../../res/images/ic_popular.png')}></Image>}
                >
                   <PopularPage/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trending'}
                    title="趋势"
                    selectedTitleStyle={{color: '#63b8ff'}}
                    onPress={() => this.setState({selectedTab: 'trending'})}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('../../res/images/ic_trending.png')}></Image>}
                    renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#63b8ff'}]}
                                                     source={require('../../res/images/ic_trending.png')}></Image>}

                >
                    <View style={{backgroundColor: '#f00', flex: 1}}>

                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    title="收藏"
                    selectedTitleStyle={{color: '#63b8ff'}}
                    onPress={() => this.setState({selectedTab: 'favorite'})}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('../../res/images/ic_favorite.png')}></Image>}
                    renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#63b8ff'}]}
                                                     source={require('../../res/images/ic_favorite.png')}></Image>}

                >
                    <View style={{backgroundColor: '#00f', flex: 1}}>

                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={{color: '#63b8ff'}}
                    onPress={() => this.setState({selectedTab: 'my'})}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('../../res/images/ic_my.png')}></Image>}
                    renderSelectedIcon={() => <Image style={[styles.icon, {tintColor: '#63b8ff'}]}
                                                     source={require('../../res/images/ic_my.png')}></Image>}

                >

                    <MinePage navigation={this.props.navigation}/>
                </TabNavigator.Item>
            </TabNavigator>
        </View>)
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        height: 26,
        width: 26
    }
});