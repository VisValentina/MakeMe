var React = require('react-native');


var {
	View,
	Image,
	StyleSheet,
} = React;

var styles = StyleSheet.create({
	filter: {
		width: 21,
		height: 21,
		alignItems: 'flex-start',
		marginTop: 24,
		marginLeft: 15
	}
});

var CustomPrevFilter = React.createClass( {

	render(){
		return (
			<View>
				
				<Image
	        style={styles.filter}
	        source={require('image!custom_prev_filter')} />
	      
      </View>
		)
	}
});

module.exports = CustomPrevFilter