var React = require('react-native');
var Button = require('apsl-react-native-button');
var RoutineShow = require('../RoutineShow/RoutineShow');
var TrainerShow = require('../TrainerShow/TrainerShow');

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
  backgroundImageRoutine: {
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
  trainerNameRoutine: {
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
    fontFamily: 'HelveticaNeue-Light',
    color: '#ce3c3c',
    letterSpacing: 3,
    fontSize: 21,
    marginTop: -5,
    marginLeft: 2,
    backgroundColor: 'transparent'
  },
  listView: {
  	marginTop: -20
  },
  profile: {
    width: 62,
    height: 62,
    marginTop: 15,
    marginLeft: 15
  },
  trainerName: {
    color: '#ce3c3c',
    fontFamily: 'Raleway',
    fontSize: 18,
    letterSpacing: 1.5,
    position: 'absolute',
    bottom: 20,
    left: 90,
    paddingBottom: 20
  },
  specialties: {
    color: '#b3b3b3',
    fontFamily: 'Raleway',
    letterSpacing: 1.5,
    position: 'absolute',
    bottom: 0,
    fontSize: 11,
    left: 90,
    paddingBottom: 20
  },
  completedRoutines: {
    color: '#b3b3b3',
    fontFamily: 'Raleway',
    letterSpacing: 1,
    fontSize: 11,
    position: 'absolute',
    right: 20,
    top: 30
  },
  backgroundTrainer: {
    width: 375,
    height: 85
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

var MOCK_TRAINER_FAVORITES = [{
                                        name: "Ilaria Montague",
                                        specialties: "Martial Arts",
                                        completed: "3 0f 8"
                                     },
                                     {
                                        name: "Omar Sandoval",
                                        specialties: "Boxing, Conditioning",
                                        completed: "2 0f 5"
                                     }
                                    ];
	
var images = {
	  core: require('image!core'),
	  conditioning: require('image!conditioning'),
	  boxing: require('image!boxing'),
	  kickbox: require('image!kickbox'),
	  strength: require('image!strength')
	};

var barImages = {
  "active": require('image!true_bar'),
  "unactive": require('image!false_bar')
};

var trainerImages = {
  "Ilaria Montague": require('image!ilaria_profile_fav'),
  "Omar Sandoval": require('image!omar_profile_fav')
}

var UserFavorites = React.createClass({


	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	getInitialState: function() {
   var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   return {
     dataSource: ds.cloneWithRows(MOCK_ROUTINE_FAVORITES),
     dataSource2: ds2.cloneWithRows(MOCK_TRAINER_FAVORITES),
     showTrainerSection: false,
   };
 },

 	showTrainer(trainerName){
		this.props.navigator.replace({
			component: TrainerShow,
			passProps: {trainerName}
		})
	},

	showRoutine(routineName){
    console.log(routineName)
		this.props.navigator.replace({
			component: RoutineShow,
			passProps: {routineName}
		})
	},

  toggleTab(bool){
    this.setState({
      showTrainerSection: bool
    })
  },

	renderRoutine(routine) {
		var image = images[routine.category];

	return (
			<View style={styles.tester}>
				<Image source={image} style={styles.backgroundImageRoutine}>
						<TouchableHighlight onPress={() => this.showRoutine(routine.name)}>
						 <Text style={styles.routineName}>{routine.name}</Text>
						</TouchableHighlight>

						<TouchableHighlight onPress={() => this.showTrainer(routine.trainer)}> 
						 <Text style={styles.trainerNameRoutine}>{routine.trainer}</Text>
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

  renderTrainer(trainer) {

    var trainerImage = trainerImages[trainer.name];

      return (
        <View style={styles.tester}>
          <Image source={require('image!trainers_background_fav')} style={styles.backgroundTrainer}>
            <Image source={trainerImage} style={styles.profile}/>
            <Text style={styles.trainerName}>{trainer.name}</Text>
            <Text style={styles.specialties}>Specialties: {trainer.specialties}</Text>
            <Text style={styles.completedRoutines}>{trainer.completed}</Text>
          </Image>
         </View> 
      )  
  },

  showTabPage() {
    if (this.state.showTrainerSection) {
      return (
        <ListView
          dataSource={this.state.dataSource2}
          renderRow={this.renderTrainer}
          style={styles.listView}/>
      )
    } else{
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRoutine}
          style={styles.listView}/>
      )
    };
  },

	render(){

    var routineBar = (this.state.showTrainerSection) ? barImages['unactive'] : barImages['active']; 
    var trainerBar = (this.state.showTrainerSection) ? barImages['active'] : barImages['unactive'];
		return (
			<View style={styles.tester}>

				<View style={styles.child}>
        
        <TouchableHighlight onPress={() => this.toggleTab(false)}>
					<Image source={routineBar} style={styles.bar}> 
						<Text style={this.state.showTrainerSection ? styles.barTextDisactive : styles.barTextActive}>ROUTINES</Text>
					</Image>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.toggleTab(true)}>
					<Image source={trainerBar} style={styles.bar}>
						<Text style={this.state.showTrainerSection ? styles.barTextActive : styles.barTextDisactive}>TRAINERS</Text>
					</Image>
        </TouchableHighlight>  
				</View>
        {this.showTabPage()}
			</View>
		)
	}
});

module.exports = UserFavorites