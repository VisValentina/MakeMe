var React = require('react-native');
var StartLogo = require('./StartLogo');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Button = require('apsl-react-native-button');

var {
	View,
	StyleSheet,
	Image,
	Text,
  TextInput
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
  },
});

var Login = React.createClass({

	render() {
		return (
			<View style={styles.tester}>
				<Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}>
					<StartLogo/>
					<Text style={styles.tagLine}>Exercise just got personal.</Text>

					<Text style={styles.tagLine}> YOU LOGGED IN</Text>
          
          <TextInput>
          </TextInput>


				</Image>
			</View>
	)}
});

module.exports = Login