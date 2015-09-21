var React = require('react-native');

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
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    alignSelf: 'center'
  }
});

var UserRoutineShow = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){
		return (
			<View style={styles.tester}>
        <Text style={styles.text}>I AM THE ROUTINE SHOW PAGE</Text>
				<Text style={styles.text}>{this.props.routineName}</Text>
			</View>
		)
	}
});

module.exports = UserRoutineShow