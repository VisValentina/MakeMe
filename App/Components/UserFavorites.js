var React = require('react-native');
var Button = require('apsl-react-native-button');
var RoutineShow = require('./RoutineShow');
var TrainerShow = require('./TrainerShow');

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
  listView: {
  	marginTop: -20
  }
});

var MOCK_ROUTINE_FAVORITES = [{
																				name: "Purgatory 4",
																				trainer: "Angel Alicea",
																				level: "3",
																				category: "strength"
																		 },
																		 {
																				name: "Boxcamp",
																				trainer: "Greg James",
																				level: "3",
																				category: "boxing"
																		 },
																		 {
																				name: "Purgatory",
																				trainer: "Ilaria Montague",
																				level: "3",
																				category: "kickbox"
																		 }
																		];
	
var images = {
	  core: require('image!core'),
	  conditioning: require('image!conditioning'),
	  boxing: require('image!boxing'),
	  kickbox: require('image!kickbox'),
	  strength: require('image!strength')
	};

var UserFavorites = React.createClass({


	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	getInitialState: function() {
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   return {
     dataSource: ds.cloneWithRows(MOCK_ROUTINE_FAVORITES),
   };
 },

 	showTrainer(trainerName){
		this.props.navigator.replace({
			component: TrainerShow,
			passProps: {trainerName}
		})
	},

	showRoutine(routineName){
		this.props.navigator.replace({
			component: RoutineShow,
			passProps: {routineName}
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
					 
					 <Button onPress={console.log("PRESSED")}
	                style={styles.playlistButton} textStyle={styles.playlistButtonText}>
	                +
	          </Button>
				 </Image>
			</View>
		)
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

				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderRoutine}
					style={styles.listView}/>

			</View>
		)
	}
});

module.exports = UserFavorites