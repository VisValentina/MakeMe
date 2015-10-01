'use strict';

var React = require('react-native');
var { Router, Schema, Route, Actions } = require('react-native-router-flux');
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
  componentDidMount(){
    //check if authed.
    if(true){ //user is authed
      Actions.main();
    } else {
      Actions.start();
    }
  },
  render(){
    return (
      <Router>
        <Route name="main" component={Main} initial={true} />
        <Route name="start" component={Start} hideNavBar={true} />
      </Router>
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