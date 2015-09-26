var React = require('react-native');
var Button = require('apsl-react-native-button');

var {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBarIOS
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
    // marginTop: -65
  },
  tagLine: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12,
    textAlign: 'center'
   },
  underTagline: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12,
    textAlign: 'center'
  }
});

var UserProfile = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){
		return (
			<View style={styles.tester}>
				<Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}>
					
					<View style={{marginLeft: 225, marginRight: 225, marginTop: 75}}>
					<Text style={styles.tagLine}>
            Your history is currently under construction
					</Text>

          <Text style={styles.underTagline}>
          Make Me improve.
          </Text>

					</View>
					
				</Image>
			</View>
		)
	}
});

module.exports = UserProfile