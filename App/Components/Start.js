var React = require('react-native');
var StartLogo = require('./StartLogo');

var {
	View,
	StyleSheet,
	Image,
	StatusBarIOS,
	Text
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
  	marginTop: 20,
  	fontSize: 12
  }
});

var Start = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	render() {
		return (
			<View style={styles.tester}>
				<Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}>
					<StartLogo/>
					<Text style={styles.tagLine}>Exercise just got personal.</Text>
				</Image>
			</View>
	)}
});

module.exports = Start