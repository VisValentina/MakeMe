var React = require('react-native');

var {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  AlertIOS,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -65
  },
  tagLine: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12
  }
});

var Playlist = React.createClass({
	render(){
		return (
			<View>
				<Text style={styles.tagLine}>ABOUT PAGE TEXT</Text>
      </View>
		)
	}
});

module.exports = Playlist