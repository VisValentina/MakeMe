var React = require('react-native');

var {
	View,
	Image,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	icon: {
		width: 375,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 12
	}
});

var InputBackground = React.createClass({
	render(){
		return (
			<View>
				<Image
	        style={styles.icon} source={require('image!inputBackground')} >
	        {this.props.children}
	        </Image>
      </View>
		)
	}
});

module.exports = InputBackground