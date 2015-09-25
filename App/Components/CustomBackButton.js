var React = require('react-native');


var {
	View,
	Image,
	StyleSheet,
	TouchableHighlight
} = React;

var styles = StyleSheet.create({
	filter: {
		width: 13,
		height: 19,
		alignItems: 'flex-start',
		marginTop: 24,
		marginLeft: 15
	}
});

var CustomBackButton = React.createClass( {

	goBack(){
		var Playlist = require('./Playlist');
		// how can we make this go to suggested when came from suggested
		var Suggested = require('./Suggested');

		this.props.navigator.push({
			component: Playlist
		});
	},

	render(){
		return (
			<View>
				<TouchableHighlight onPress={this.goBack}>
				<Image
	        style={styles.filter}
	        source={require('image!back_button')} />
	      </TouchableHighlight>
      </View>
		)
	}
});

module.exports = CustomBackButton