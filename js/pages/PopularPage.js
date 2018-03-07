/**
 * Created by emery on 2018/2/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import NavigationBar from '../component/NavigationBar';
import ScrollableTabView from  'react-native-scrollable-tab-view';
import ProjectRow from '../component/ProjectRow';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ['Android', 'IOS', 'Java', 'React', 'JS']
        };
    }

    renderRightBtn = () => {
        return (<View style={styles.rightBtn}>
            <TouchableOpacity activeOpacity={0.7}>
                <Image style={styles.leftBtnStyle}
                       source={require('../../res/images/ic_search_white_48pt.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} >
                <Image style={styles.rightBtnStyle}
                       source={require('../../res/images/ic_more_vert_white_48pt.png')}></Image>
            </TouchableOpacity>

        </View>)
    }

    render() {
        return (<View style={styles.container}>

            <NavigationBar title='最热' rightBtn={this.renderRightBtn()}/>
            <ScrollableTabView
                tabBarBackgroundColor='#63b8ff'
                tabBarActiveTextColor='#FFF'
                tabBarInactiveTextColor='#F5FFFA'
                tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}>
                {
                    this.state.languages.map((item, i) => {
                        return <PopularTab key={`tab${i}`} tabLabel={item}></PopularTab>
                    })
                }
            </ScrollableTabView>


        </View>)
    }
}


class PopularTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            isLoading: true
        };
    }

    componentDidMount = () => {
        this.loadData();
    }

    renderRow(obj) {
        return <ProjectRow item={obj}/>
    }

    loadData = () => {
        this.setState({isLoading: true});
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json.items),
                    isLoading: false
                })
            }).done();

    }
    handleRefresh = () => {
        this.loadData();
    }

    render() {
        return (<View style={styles.container}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      refreshControl={
                          <RefreshControl
                              refreshing={this.state.isLoading}
                              onRefresh={this.handleRefresh}
                              tintColor='#f00'
                              title='Loading'
                              titleColor='#0f0'
                              colors={['#f00', '#0f0', '#00f']}
                              progressBackgroundColor='#ff0'>

                          </RefreshControl>
                      }/>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftBtnStyle: {
        width: 24,
        height: 24
    },
    rightBtnStyle:{
        width: 24,
        height: 24
    },
    rightBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8
    }
});