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

var InputBackgroundLeft = React.createClass({
	render(){
		return (
			<View>
				<Image
	        style={styles.icon} source={require('image!inputBackgroundLeft')} >
	        {this.props.children}
	      </Image>
      </View>
		)
	}
});

module.exports = InputBackgroundLeft