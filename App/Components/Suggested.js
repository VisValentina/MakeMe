var React = require('react-native');
var NavLogo = require('./NavLogo');
var NavigationBar = require('react-native-navbar');
var UserPlaylist = require('./UserPlaylist');
var CustomNextButton = require('./CustomNextButton');
var UserSuggested = require('./UserSuggested');

var {
	View,
	Text,
	StyleSheet,
	Navigator
} = React;

var styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: "black"
  }
});


var Suggested = React.createClass({

	renderScene(route, navigator) {
    const Component = route.component;
    let navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, { navigator, route, });
    }

    return (
      <View style={{ flex: 1, }}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

	render(){
		return (
			<Navigator
        style = {styles.container}
        renderScene={this.renderScene}
        initialRoute={{
        title: '',
        navigationBar: (
        	<NavigationBar
        		customTitle={<NavLogo/>}
        		customNext={<CustomNextButton/>}
        		backgroundStyle={{backgroundColor: "#2d2d2d"}}/>
        ),
        component: UserSuggested
      }} />
		)
	}
});

module.exports = Suggested