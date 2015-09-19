var React = require('react-native');
var Button = require('apsl-react-native-button');

var {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBarIOS,
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
    backgroundImage: {
    height: 125,
    width: 375
  },
  routineName: {
  	marginLeft: 23,
  	marginTop: 17,
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
  }
});

var MOCK_ROUTINE_PLAYLIST_RESULTS = [{
																				name: "V - Core 1.2",
																				trainer: "Valentina Pherson",
																				level: "2"
																		 }
																		];

var UserPlaylist = React.createClass({

	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	render(){
		var routine = MOCK_ROUTINE_PLAYLIST_RESULTS[0];

		return (	
			<View style={styles.tester}>
			<Image source={require('image!core')} style={styles.backgroundImage}>
				 <Text style={styles.routineName}>{routine.name}</Text>
				 <Text style={styles.trainerName}>{routine.trainer}</Text>
				 <Text style={styles.routineLevel}>Level {routine.level}</Text>
				 
				 <Button onPress={console.log("PRESSED")}
                style={styles.playlistButton} textStyle={styles.playlistButtonText}>
                GO
          </Button>

			 </Image>
			</View>
		)
	}
});

module.exports = UserPlaylist