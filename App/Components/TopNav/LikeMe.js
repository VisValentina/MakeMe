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
		marginBottom: 5,
		marginLeft: 5
	}
});

var LikeMe = React.createClass({
	render(){
		return (
			<View>
				<Image
	        style={styles.icon} 
	        source={require('image!like_me')} />
      </View>
		)
	}
});

module.exports = LikeMe