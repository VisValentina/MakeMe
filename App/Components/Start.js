var React = require('react-native');
var StartLogo = require('./StartLogo');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Button = require('apsl-react-native-button');

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
  },
  loginStyleButton: {
  	marginTop: 290,
  	backgroundColor: '#ce3c3c',
  	width: 185,
  	alignSelf: 'center',
  	borderRadius: 23,
  	borderColor: '#e6e6e6',
  	borderWidth: .5
  },
  loginStyleText: {
  	color: '#e6e6e6',
  	fontFamily: 'Raleway',
  	fontSize: 14,
  	letterSpacing: 1.2
  },
  signupStyleButton: {
  	marginTop: 10,
  	backgroundColor: 'transparent',
  	width: 185,
  	alignSelf: 'center',
  	borderRadius: 23,
  	borderColor: '#e6e6e6',
  	borderWidth: .5
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

					<Button
                style={styles.loginStyleButton} textStyle={styles.loginStyleText}>
                LOG IN
          </Button>

          <Button
                style={styles.signupStyleButton} textStyle={styles.loginStyleText}>
                SIGN UP
          </Button>


				</Image>
			</View>
	)}
});

module.exports = Start