'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var Start = require('./App/Components/Start/Start');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

var MakeMe = React.createClass({

  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {navigator, route, });
    }

    return (
      <View style={{ flex: 1, }}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  render() {
    return (
      <Navigator
        style = {styles.container}
        renderScene = {this.renderScene}
        initialRoute =  {{
          title: '',
          navigationBar: (
            <NavigationBar
              backgroundStyle={{backgroundColor: "transparent"}}
              style={{height: 0}}/>
          ),
          component: Start
        }} />
    );
  }
});






var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -64
  }
});

AppRegistry.registerComponent('MakeMe', () => MakeMe);
