var React = require('react-native');
var Button = require('apsl-react-native-button');

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
coverImage: {
    width: 375,
    height: 200,
    justifyContent: 'flex-end' 
  },
  profileImage: {
    width: 95,
    height: 95,
    alignSelf: 'flex-start',
    marginLeft: 13,
    position: 'absolute',
    bottom: 13
  },
  trainerName1: {
    fontFamily: 'Raleway',
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  location: {
    fontFamily: 'Raleway',
    color: '#b3b3b3',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 20,
    marginTop: 5,
    letterSpacing: 1
  },
  redBar: {
    width: 375,
    height: 55
  },
  parent: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  child: {
    textAlign: 'center',
    fontSize: 12,
    flex: 1,
    color: '#ffffff',
    fontFamily: 'Raleway',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 9
  },
  childLow: {
    textAlign: 'center',
    fontSize: 11,
    flex: 1,
    color: '#000000',
    fontFamily: 'Raleway',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginBottom: 10
  },
  parentBottom: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderWidth: 1,
    marginBottom: 25,
    alignSelf: 'stretch'
  },
  childBottom: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 60
  },
  childBottomLeft: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#cccccc',
    alignSelf: 'center',
    paddingLeft: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  childBottomRight: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'Raleway',
    color: '#999999',
    alignSelf: 'center',
    paddingRight: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  playlistButton: {
    backgroundColor: '#1c1c1c',
    width: 45,
    height: 30,
    borderRadius: 7,
    borderColor: '#1c1c1c',
    marginLeft: 165
  },
  playlistButtonText: {
    backgroundColor: 'transparent',
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    marginTop: 2,
    fontSize: 30
  },
  playlistButtonIcon: {
    height: 30,
    width: 45
  },
  highlightButton: {
    marginLeft: 165,
    position: 'absolute',
    bottom: 69
  }
});

var MOCK_ROUTINE_DATABASE = [{
                                  id: "0",
                                  name: "V - Core 1.2",
                                  trainer: "Val Pherson",
                                  level: 2,
                                  category: "core",
                                  numFav: 160,
                                  duration: 22,
                                  numComments: 88,
                                  space: '10 ft',
                                  equipment: 'Mat',
                                  targets: 'Abdominals, Back'
                               },
                               {
                                  id: "1",
                                  name: "HIIT",
                                  trainer: "Chris Reede",
                                  level: "3",
                                  category: "conditioning",
                                  numFav: 80,
                                  duration: 40,
                                  numComments: 113,
                                  space: '10 ft',
                                  equipment: 'Treadmill, Dumbells',
                                  targets: 'Chest, Legs, Arms'
                               },
                               {
                                  id: "2",
                                  name: "Purgatory 11",
                                  trainer: "Angel Alicea",
                                  level: "3",
                                  category: "strength",
                                  numFav: 109,
                                  duration: 55,
                                  numComments: 317,
                                  space: 'Open area',
                                  equipment: 'Heavy Weights',
                                  targets: 'Back, Legs'
                               },
                               {
                                  id: "3",
                                  name: "Powerstrike",
                                  trainer: "Ilaria Montague",
                                  level: "3",
                                  category: "kickbox",
                                  numFav: 500,
                                  duration: 59,
                                  numComments: 289,
                                  space: '10 ft',
                                  equipment: 'None',
                                  targets: 'Legs, Glutes'
                               },
                               {
                                  id: "4",
                                  name: "V - Core 1.3",
                                  trainer: "Val Pherson",
                                  level: "2",
                                  category: "core",
                                  numFav: 322,
                                  duration: 15,
                                  numComments: 36,
                                  space: '5 ft',
                                  equipment: 'Medicine Ball',
                                  targets: 'Abdominals'
                               },
                               {
                                  id: "5",
                                  name: "Fit to Fight",
                                  trainer: "James Park",
                                  level: "2",
                                  category: "boxing",
                                  numFav: 89,
                                  duration: 44,
                                  numComments: 78,
                                  space: 'Open area',
                                  equipment: 'Boxing bag, mat',
                                  targets: 'Chest, Arms'
                               },
                               {
                                  id: "6",
                                  name: "Bodystrikes",
                                  trainer: "Ilaria Montague",
                                  level: "2",
                                  category: "kickbox",
                                  numFav: 809,
                                  duration: 50,
                                  numComments: 613,
                                  space: '10 ft',
                                  equipment: 'None',
                                  targets: 'Glutes, Legs'
                               },
                               {
                                  id: "7",
                                  name: "Powerstrike 2.0",
                                  trainer: "Ilaria Montague",
                                  level: "3",
                                  category: "kickbox",
                                  numFav: 400,
                                  duration: 30,
                                  numComments: 513,
                                  space: '10 ft',
                                  equipment: 'None',
                                  targets: 'Chest, Legs, Arms'
                               },
                               {
                                  id: "8",
                                  name: "Diesel",
                                  trainer: "Angel Alicea",
                                  level: "3",
                                  category: "strength",
                                  numFav: 860,
                                  duration: 55,
                                  numComments: 616,
                                  space: '10 ft',
                                  equipment: 'Heavy Weights, BOSU',
                                  targets: 'Lower Body'
                               },
                               {
                                  id: "9",
                                  name: "Titan Method 2",
                                  trainer: "Omar Sandoval",
                                  level: "3",
                                  category: "conditioning",
                                  numFav: 525,
                                  duration: 55,
                                  numComments: 623,
                                  space: '5 ft',
                                  equipment: '2 Kettelbells',
                                  targets: 'Chest, Shoulders'
                               },
                               {
                                  id: "10",
                                  name: "Hard Core",
                                  trainer: "Val Pherson",
                                  level: "3",
                                  category: "core",
                                  numFav: 22,
                                  duration: 17,
                                  numComments: 54,
                                  space: '5 ft',
                                  equipment: 'Step, Mat',
                                  targets: 'Abdominals'
                               },
                               {
                                  id: "11",
                                  name: "Bodyshred",
                                  trainer: "Jilian Michaels",
                                  level: "2",
                                  category: "conditioning",
                                  numFav: '3 k',
                                  duration: 35,
                                  numComments: 899,
                                  space: '10 ft',
                                  equipment: 'Mat, Dumbells',
                                  targets: 'Glutes, Back'
                               },
                               {
                                  id: "12",
                                  name: "Purgatory 4",
                                  trainer: "Angel Alicea",
                                  level: "3",
                                  category: "strength",
                                  numFav: '3 k',
                                  duration: 35,
                                  numComments: 899,
                                  space: '10 ft',
                                  equipment: 'Mat, Dumbells',
                                  targets: 'Glutes, Back'
                               },
                               {
                                  id: "13",
                                  name: "Boxcamp",
                                  trainer: "Greg James",
                                  level: "3",
                                  category: "boxing",
                                  numFav: '3 k',
                                  duration: 35,
                                  numComments: 899,
                                  space: '10 ft',
                                  equipment: 'Mat, Dumbells',
                                  targets: 'Glutes, Back'
                               },
                               {
                                  id: "14",
                                  name: "Purgatory",
                                  trainer: "Ilaria Montague",
                                  level: "3",
                                  category: "kickbox",
                                  numFav: '3 k',
                                  duration: 35,
                                  numComments: 899,
                                  space: '10 ft',
                                  equipment: 'Mat, Dumbells',
                                  targets: 'Glutes, Back'
                               }
                              ];

var images = {
  core: require('image!core_routine'),
  conditioning: require('image!conditioning_routine'),
  boxing: require('image!boxing_routine'),
  kickbox: require('image!kickbox_category'),
  strength: require('image!strength_routine')
};

var profileImages = {
  "Ilaria Montague": require('image!ilaria_profile'),
  "Val Pherson": require('image!val_profile'),
  "Chris Reede": require('image!chris_profile'),
  "Angel Alicea": require('image!angel_profile'),
  "Omar Sandoval": require('image!omar_profile'),
  "Jilian Michaels": require('image!jilian_profile'),
  "Greg James": require('image!greg_profile'),
  "James Park": require('image!james_profile')
};

var UserRoutineShow = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

  getRoutine(routine){
    console.log(routine)
    for (var i = MOCK_ROUTINE_DATABASE.length - 1; i >= 0; i--) {
      if (MOCK_ROUTINE_DATABASE[i].name === routine) {
        return MOCK_ROUTINE_DATABASE[i]
      }
    };
  },


	render(){

    var routine = this.getRoutine(this.props.routineName);
    var image = images[routine.category];
    var profileImage = profileImages[routine.trainer];

		return (
			<View style={styles.tester}>
        <Image source={image} style={styles.coverImage}>
          <Image source={profileImage} style={styles.profileImage}/>

           <TouchableHighlight style={styles.highlightButton}>
            <Image source={require('image!add_icon_button')} style={styles.playlistButtonIcon}/>
           </TouchableHighlight>
          
          <Text style={styles.trainerName1}>{routine.name}</Text>

          <TouchableHighlight>
            <Text style={styles.location}>{routine.trainer}</Text>
          </TouchableHighlight>
        </Image>


        <Image source={require('image!triple_red_bar')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>{routine.numFav}</Text>
            <Text style={styles.child}>{routine.duration}</Text>
            <Text style={styles.child}>{routine.numComments}</Text>
          </View>

          <View style={styles.parent}>
          <Text style={styles.childLow}>Favorited</Text>
          <Text style={styles.childLow}>Minutes</Text>
          <Text style={styles.childLow}>Comments</Text>
          </View>
        </Image>

        <View style={styles.parentBottom}>
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Level</Text>
            <Text style={styles.childBottomRight}>{routine.level}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Space</Text>
            <Text style={styles.childBottomRight}>{routine.space}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Equipment</Text>
            <Text style={styles.childBottomRight}>{routine.equipment}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Targets</Text>
            <Text style={styles.childBottomRight}>{routine.targets}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Category</Text>
            <Text style={styles.childBottomRight}>{routine.category}</Text>
          </View>

        </View>

      </View>
		)
	}
});

module.exports = UserRoutineShow