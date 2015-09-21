var React = require('react-native');

var {
	View,
	Image,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	icon: {
		width: 90,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 12,
		marginLeft: 5
	}
});

var NavLogoTryMe = React.createClass({
	render(){
		return (
			<View>
				<Image
	        style={styles.icon} 
	        source={require('image!NavLogoTryMe')} />
      </View>
		)
	}
});

module.exports = NavLogoTryMe