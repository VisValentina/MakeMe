var React = require('react-native');
var Button = require('apsl-react-native-button');

var {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBarIOS,
  ListView,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  child: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 55
  },
  bar: {
  	height: 55,
  	width: 188
  },
  barTextActive: {
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	color: '#ce3c3c',
  	fontSize: 14,
  	marginTop: 4,
  	letterSpacing: 2,
  	alignSelf: 'center',
  	marginTop: 23
  },
  barTextDisactive: {
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	color: '#666666',
  	fontSize: 14,
  	marginTop: 4,
  	letterSpacing: 2,
  	alignSelf: 'center',
  	marginTop: 23
  },
  backgroundImage: {
    height: 135,
    width: 375
  },
  routineName: {
  	marginLeft: 23,
  	marginTop: 22,
  	fontFamily: 'Raleway',
  	fontSize: 19,
  	letterSpacing: 1.5,
  	color: '#ce3c3c'
  },
  trainerName: {
  	marginLeft: 23,
  	fontFamily: 'Raleway',
  	color: '#b3b3b3',
  	fontSize: 11,
  	marginTop: 7,
  	letterSpacing: 1
  },
  routineLevel: {
  	marginLeft: 23,
  	fontFamily: 'Raleway',
		color: '#b3b3b3',
		fontSize: 10,
		letterSpacing: 1,
  	marginTop: 5
  },
  playlistButton: {
  	marginLeft: 23,
  	backgroundColor: '#1c1c1c',
  	width: 40,
  	height: 22,
  	borderRadius: 7,
  	borderColor: '#1c1c1c',
  	marginTop: 12
  },
  playlistButtonText: {
  	fontFamily: 'BebasNeue',
  	color: '#ce3c3c',
  	letterSpacing: 3,
  	fontSize: 16
  },
});


var UserFavorites = React.createClass({


	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){
		return (
			<View style={styles.tester}>

				<View style={styles.child}>
					<Image source={require('image!true_bar')} style={styles.bar}>
						<Text style={styles.barTextActive}>ROUTINES</Text>
					</Image>

					<Image source={require('image!false_bar')} style={styles.bar}>
						<Text style={styles.barTextDisactive}>TRAINERS</Text>
					</Image>
				</View>

					<Image source={require('image!strength')} style={styles.backgroundImage}>
						<TouchableHighlight>
						 <Text style={styles.routineName}>Purgatory 4</Text>
						</TouchableHighlight>

						<TouchableHighlight> 
						 <Text style={styles.trainerName}>Angel Alicea</Text>
						</TouchableHighlight>

					 <Text style={styles.routineLevel}>Level 3</Text>
					 
					 <Button onPress={console.log("PRESSED")}
	                style={styles.playlistButton} textStyle={styles.playlistButtonText}>
	                +
	          </Button>
				 </Image>

			</View>
		)
	}
});

module.exports = UserFavorites