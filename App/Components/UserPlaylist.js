var React = require('react-native');

var {
  View,
  StyleSheet,
  Text,
  StatusBarIOS
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

var UserPlaylist = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	render(){
		return (
			<View style={styles.tester}>
			 <Text>USER PLAYLIST</Text>
			</View>
		)
	}
});

module.exports = UserPlaylist