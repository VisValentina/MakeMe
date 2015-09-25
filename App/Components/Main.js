var React = require('react-native');
var Playlist = require('./Playlist');
var Suggested = require('./Suggested');
var Go = require('./Go');
var Favorites = require('./Favorites');

var {
  View,
  StyleSheet,
  Text,
  StatusBarIOS,
  TabBarIOS
} = React;

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 25
  },
  bgWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  }
});

var Main = React.createClass({

  getInitialState() {
    return {
      selectedTab: 'tabOne'
    }
  },

  componentWillMount() {
    StatusBarIOS.setStyle(1);
  },

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  },


  render(){
    return (
      <TabBarIOS
      barTintColor="#1c1c1c"
      tintColor="#b3b3b3">
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}
          title={''}
          icon={require('image!playlist_icon_b')}
          selectedIcon={require('image!playlist_icon')}>
          <Playlist/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}
          title={''}
          icon={require('image!suggested_icon_b')}
          selectedIcon={require('image!suggested_icon')}>
          <Suggested/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}
          title={''}
          icon={require('image!go_icon')}>
          <Go/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabFour'}
          onPress={() => this.setTab('tabFour')}
          title={''}
          icon={require('image!favorites_icon_b')}
          selectedIcon={require('image!favorites_icon')}>
          <Favorites/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabFive'}
          onPress={() => this.setTab('tabFive')}
          title={''}
          icon={require('image!profile_icon_b')}
          selectedIcon={require('image!profile_icon')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>I AM THE FAVORITE PAGE</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
});

module.exports = Main