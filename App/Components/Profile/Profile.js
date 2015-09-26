var React = require('react-native');
var NavLogo = require('../TopNav/NavLogo');
var NavigationBar = require('react-native-navbar');
var UserProfile = require('./UserProfile');
var CustomNextButton = require('../TopNav/CustomNextButton');

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


var Playlist = React.createClass({

	renderScene(route, navigator) {
    const Component = route.component;
    let navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, { navigator, route, });
    }

    return (
      <View style={{ flex: 1, }}>
        {navBar}
        <Component {...route.passProps} navigator={navigator} route={route} />
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
        component: UserPlaylist,
        passProps: {routineToDelete: this.props.routineName}
      }} />
		)
	}
});

module.exports = Playlist