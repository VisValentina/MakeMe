var React = require('react-native');
var Playlist = require('./Playlist');


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
      tintColor="#ce3c3c">
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}
          title={''}
          icon={require('image!playlist_icon')}>
          <Playlist/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}
          title={''}
          icon={require('image!suggested_icon')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>I AM THE SEARCH PAGE</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}
          title={''}
          icon={require('image!go_icon')}>
          <View style={styles.bgWrapper}>
             <Text style={styles.tabText}>I AM THE WORKOUT PAGE</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabFour'}
          onPress={() => this.setTab('tabFour')}
          title={''}
          icon={require('image!favorites_icon')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>I AM THE FAVORITE PAGE</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tabFive'}
          onPress={() => this.setTab('tabFive')}
          title={''}
          icon={require('image!profile_icon')}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>I AM THE PROFILE PAGE</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
});

module.exports = Main