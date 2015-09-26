var React = require('react-native');
var Main = require('../Main');
var Button = require('apsl-react-native-button');
var UseMe = require('./UseMe');
var Start = require('./Start');

var {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBarIOS,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexWrap: 'wrap'
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
    fontSize: 12,
    textAlign: 'justify'
   },
    signupStyleButton: {
  	marginTop: 243,
  	backgroundColor: 'transparent',
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
  underTagline: {
  	color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12
  }
});

var About = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	goToPlaylistPage: function() {
		this.props.navigator.push({
			component: Main
		})
	},

	render(){
		return (
			<View style={styles.tester}>
				<Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}>
									<UseMe/>
					
					<View style={{marginLeft: 252, marginRight: 252}}>
					<Text style={styles.tagLine}>
						Make Me brings the very best talent in personal training straight to your mobile device. Discover new routines uploaded daily and customize your favorite trainers and work outs plans, Our trainers will virtually track your progress and push you to your limits.
					</Text>
					</View>
					<Text style={styles.underTagline}>
					Make Me an athlete.
					</Text>
					


          <Button onPress={this.goToPlaylistPage}
                          style={styles.signupStyleButton} 
                          textStyle={styles.loginStyleText}>
                          CONTINUE
          </Button>


				</Image>
			</View>
		)
	}
});

module.exports = About