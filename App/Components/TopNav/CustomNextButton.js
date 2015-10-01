var React = require('react-native');
var { Actions } = require('react-native-router-flux');

var {
	View,
	Image,
	StyleSheet,
	AlertIOS,
	TouchableHighlight
} = React;

var styles = StyleSheet.create({
	gear: {
		width: 21,
		height: 21,
		alignItems: 'flex-end',
		marginTop: 30,
		marginRight: 15
	}
});

var CustomNextButton = React.createClass( {

	alertLogOut() {
		AlertIOS.alert(
			"Logout",
			"Are you sure?",
			[
			 {text: 'Cancel', onPress: () => console.log("cancelled logout")},
			 {text: 'Logout', onPress: this.onPressLogOut },
			]
		)
	},

	onPressLogOut(){
		//unauth
		Actions.start();
	},

	render(){
		return (
			<View>
				<TouchableHighlight onPress={this.alertLogOut}>
				<Image
	        style={styles.gear}
	        source={require('image!gear')} />
	      </TouchableHighlight>
      </View>
		)
	}
});

module.exports = CustomNextButton