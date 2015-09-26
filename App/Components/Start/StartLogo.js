var React = require('react-native');

var {
	View,
	Image,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	icon: {
		width: 110,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 130
	}
});

var StartLogo = React.createClass({
	render(){
		return (
			<View>
				<Image
	        style={styles.icon} 
	        source={require('image!start_logo')} />
      </View>
		)
	}
});

module.exports = StartLogo