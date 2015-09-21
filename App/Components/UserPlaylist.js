var React = require('react-native');
var Button = require('apsl-react-native-button');
var TrainerShow = require('./TrainerShow');
var UserTrainerShow = require('./UserTrainerShow');

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
  listView: {
  	marginTop: -20
  }
});

var MOCK_ROUTINE_PLAYLIST_RESULTS = [{
																				name: "V - Core 1.2",
																				trainer: "Valentina Pherson",
																				level: "2",
																				category: "core"
																		 },
																		 {
																				name: "HIIT",
																				trainer: "Chris Reede",
																				level: "3",
																				category: "conditioning"
																		 },
																		 {
																				name: "Purgatory 11",
																				trainer: "Angel Alicea",
																				level: "3",
																				category: "strength"
																		 },
																		 {
																				name: "Powerstrike",
																				trainer: "Ilaria Montague",
																				level: "3",
																				category: "kickbox"
																		 },
																		 {
																				name: "V - Core 1.3",
																				trainer: "Valentina Pherson",
																				level: "2",
																				category: "core"
																		 },
																		 {
																				name: "Fit to Fight",
																				trainer: "James Park",
																				level: "2",
																				category: "boxing"
																		 },
																		];
	var images = {
	  core: require('image!core'),
	  conditioning: require('image!conditioning'),
	  boxing: require('image!boxing'),
	  kickbox: require('image!kickbox'),
	  strength: require('image!strength')
	};

var UserPlaylist = React.createClass({

getInitialState: function() {
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   return {
     dataSource: ds.cloneWithRows(MOCK_ROUTINE_PLAYLIST_RESULTS),
   };
 },

	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	showRoutine(routineName){
		console.log(routineName)
	},

	showTrainer(trainerName){
		console.log(trainerName);
		this.props.navigator.replace({
			component: TrainerShow,
			passProps: {trainerName}
		})
	},



	renderRoutine(routine) {
		var image = images[routine.category];

		return (
			<View style={styles.tester}>
				<Image source={image} style={styles.backgroundImage}>

					<TouchableHighlight onPress={() => this.showRoutine(routine.name)}>
				 		<Text style={styles.routineName}>{routine.name}</Text>
				 	</TouchableHighlight>

				 	<TouchableHighlight onPress={() => this.showTrainer(routine.trainer)}>
				 		<Text style={styles.trainerName}>{routine.trainer}</Text>
				 	</TouchableHighlight>

				 <Text style={styles.routineLevel}>Level {routine.level}</Text>
				 
				 <Button 
                style={styles.playlistButton} textStyle={styles.playlistButtonText}>
                GO
          </Button>

			 </Image>
			</View>
		)
	},

	render(){
		var routine = MOCK_ROUTINE_PLAYLIST_RESULTS[0];

		return (	
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRoutine}
				style={styles.listView}/>
		)
	}
});

module.exports = UserPlaylist