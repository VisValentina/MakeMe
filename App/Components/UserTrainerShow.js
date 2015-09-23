var React = require('react-native');
var Button = require('apsl-react-native-button');


var {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBarIOS,
  TouchableHighlight,
  ListView,
  ScrollView
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
  barTopLeft: {
    color: '#ffffff',
    fontFamily: 'Raleway',
    fontWeight: 'bold',

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
    // flex: 1,
    borderColor: '#333333',
    borderWidth: .5,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#cccccc',
    paddingTop: 23,
    paddingLeft: 30,
    letterSpacing: 1,
    backgroundColor: 'black',
    height: 60
  },
  childBottomBio: {
    // flex: 1,
    borderColor: '#333333',
    borderWidth: .5,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#cccccc',
    // justifyContent: 'center',
    letterSpacing: 1,
    backgroundColor: 'green',
    height: 100
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
    backgroundColor: 'transparent',
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    marginTop: 2,
    fontSize: 26
  },
  listView: {
    marginBottom: -50,
    marginTop: -20
  },
  spacer: {
    height: 15,
    width: 375,
    borderColor: 'red'
  }
});

var TRAINER_MOCK_DATABASE = [
                            {
                              id:"",
                              name:"Ilaria Montague",
                              numFavorites:"11",
                              numComments: "81",
                              numRoutines:"17",    
                              bio:"I am passionate about making people feel and look like a beast.",
                              profilePic:"",
                              coverPic:"",
                              routines: ["5", "2", "0"],
                              activeSince: "",
                              contact:"",
                              location:"New York, NY",
                              specialties: ["martial arts", "boxing"]
                            },
                            {

                            }
                            ];


 var MOCK_ROUTINE_DATABASE = [{
                                  id: "0",
                                  name: "V - Core 1.2",
                                  trainer: "Valentina Pherson",
                                  level: "2",
                                  category: "core"
                               },
                               {
                                  id: "1",
                                  name: "HIIT",
                                  trainer: "Chris Reede",
                                  level: "3",
                                  category: "conditioning"
                               },
                               {
                                  id: "2",
                                  name: "Purgatory 11",
                                  trainer: "Angel Alicea",
                                  level: "3",
                                  category: "strength"
                               },
                               {
                                  id: "3",
                                  name: "Powerstrike",
                                  trainer: "Ilaria Montague",
                                  level: "3",
                                  category: "kickbox"
                               },
                               {
                                  id: "4",
                                  name: "V - Core 1.3",
                                  trainer: "Valentina Pherson",
                                  level: "2",
                                  category: "core"
                               },
                               {
                                  id: "5",
                                  name: "Fit to Fight",
                                  trainer: "James Park",
                                  level: "2",
                                  category: "boxing"
                               },
                              ];


  var profileImages = {
    "Ilaria Montague": require('image!ilaria_profile'),
    "Valentina Pherson": require('image!ilaria_profile'),
  };

  var coverImages = {
    "Ilaria Montague": require('image!ilaria_cover'),
    "Valentina Pherson": require('image!ilaria_cover'),
  };

  var images = {
    core: require('image!core'),
    conditioning: require('image!conditioning'),
    boxing: require('image!boxing'),
    kickbox: require('image!kickbox'),
    strength: require('image!strength')
  };

  var UserTrainerShow = React.createClass({
  
  getInitialState() {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
       dataSource: ds.cloneWithRows([]),
       showRoutines: false,
       showBio: false
     };
  },

  componentWillMount() {
  		StatusBarIOS.setStyle(1);
	},

  toggleBio(){
    this.setState({
      showBio: !this.state.showBio
    })
  },

  toggleRoutine(routines){
    this.setState({
      showRoutines: !this.state.showRoutines,
      dataSource: this.state.dataSource.cloneWithRows(routines)
    })
  },

  getRoutines(arr) {
    var routines = [];

    for (var i = MOCK_ROUTINE_DATABASE.length - 1; i >= 0; i--) {
      for (var j = arr.length - 1; j >= 0; j--) {
        if (MOCK_ROUTINE_DATABASE[i].id === arr[j]) {
          routines.push(MOCK_ROUTINE_DATABASE[i]);
        };
      };
      
    };
    return routines;
  },

  renderRoutine(routine) {
    var image = images[routine.category];

    return (
      <View style={styles.tester}>
        <Image source={image} style={styles.backgroundImage}>

          <TouchableHighlight >
            <Text style={styles.routineName}>{routine.name}</Text>
          </TouchableHighlight>

          <TouchableHighlight>
            <Text style={styles.trainerName}>{routine.trainer}</Text>
          </TouchableHighlight>

         <Text style={styles.routineLevel}>Level {routine.level}</Text>
         
         <Button 
                style={styles.playlistButton} textStyle={styles.playlistButtonText}>
                +
          </Button>

       </Image>
      </View>
    )
  },

	render(){

    var profile = TRAINER_MOCK_DATABASE[0];

    var profileImage = profileImages[profile.name];
    var coverImage = coverImages[profile.name];
    var routines = this.getRoutines(profile.routines);

    var profile = TRAINER_MOCK_DATABASE[0];

		return (
			<View style={styles.tester}>
        <Image source={coverImage} style={styles.coverImage}>
          <Image source={profileImage} style={styles.profileImage}/>
          <Text style={styles.trainerName1}>{profile.name}</Text>
          <Text style={styles.location}>{profile.location}</Text>
        </Image>


        <Image source={require('image!triple_red_bar')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>{profile.numFavorites} k</Text>
            <Text style={styles.child}>{profile.numRoutines}</Text>
            <Text style={styles.child}>{profile.numComments}</Text>
          </View>

          <View style={styles.parent}>
          <Text style={styles.childLow}>Favorited</Text>
          <Text style={styles.childLow}>Routines</Text>
          <Text style={styles.childLow}>Comments</Text>
          </View>
        </Image>

        <ScrollView style={styles.parentBottom} 
          automaticallyAdjustContentInsets={false} 
          contentContainerStyle={styles.parentBottom}>

          <TouchableHighlight onPress={() => this.toggleRoutine(routines)}>
          <Text style={styles.childBottom}>Routines</Text>
          </TouchableHighlight>

          {this.state.showRoutines && (<View style={styles.spacer}></View>)}

          {this.state.showRoutines && ( 
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRoutine}
              style={styles.listView}
              contentInset={{top: 64}}/>
          )}

          <TouchableHighlight onPress={this.toggleBio}>
          <Text style={styles.childBottom}>Bio</Text>
          </TouchableHighlight>

          {this.state.showBio && (<Text style={styles.childBottomBio}>{profile.bio}</Text>)}
          
          <Text style={styles.childBottom}>Active Since</Text>
          <Text style={styles.childBottom}>Specialties</Text>
          <Text style={styles.childBottom}>Contact</Text>
        </ScrollView>

			</View>
		)
	}
});

module.exports = UserTrainerShow