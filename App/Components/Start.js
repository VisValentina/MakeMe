var React = require('react-native');

var {
	View,
	StyleSheet,
	Image,
	StatusBarIOS
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red',
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -65
  }
});

var Start = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	render() {
		return (
			<View style={styles.tester}>
				<Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}/>
			</View>
	)}
});

module.exports = Start