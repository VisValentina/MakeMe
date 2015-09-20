var React = require('react-native');


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
		marginTop: 23,
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
		// interview question
		// to prevent dependency cycle!!! 
		var Start = require('./Start');
    this.props.navigator.push({
      component: Start
    });  
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