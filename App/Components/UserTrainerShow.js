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
  childBottomRightImage: {
    height: 10,
    width: 8,
    alignSelf: 'center',
    marginRight: 30
  },
  childBottomRightImageTrue: {
    height: 8,
    width: 10,
    alignSelf: 'center',
    marginRight: 30
  },
  childBottomBio: {
    borderColor: 'transparent',
    borderWidth: .5,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    color: '#ce3c3c',
    letterSpacing: 1,
    lineHeight: 20,
    backgroundColor: 'transparent',
    height: 110,
    marginRight: 40,
    marginLeft: 40
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
                              id:"0",
                              name:"Ilaria Montague",
                              numFavorites:"11",
                              numComments: "81",
                              numRoutines:"17",    
                              bio:'"I train students to have a great workout, but at the same time to develop a stronger inner self."',
                              profilePic:"",
                              coverPic:"",
                              routines: ["5", "2", "0"],
                              activeSince: "May 20, 2015",
                              contact:"ilaria@strikeny.com",
                              location:"New York, NY",
                              specialties: "Martial arts"
                            },
                            {
                              id:"1",
                              name:"Chris Reede",
                              numFavorites:"3",
                              numComments: "17",
                              numRoutines:"4",    
                              bio:'"I am here to give you the best workout in the world, hell yeah!"',
                              profilePic:"",
                              coverPic:"",
                              routines: ["1", "3"],
                              activeSince: "June 06, 2015",
                              contact:"chris@barrysbootcamp.com",
                              location:"San Francisco, CA",
                              specialties: "Interval training"
                            },
                            {
                              id:"2",
                              name:"Val Pherson",
                              numFavorites:"13",
                              numComments: "36",
                              numRoutines:"3",    
                              bio:'"Eat clean and train mean."',
                              profilePic:"",
                              coverPic:"",
                              routines: ["4", "2", "5"],
                              activeSince: "March 28, 2015",
                              contact:"v@vfit.com",
                              location:"San Francisco, CA",
                              specialties: "Elite Performance"
                            },
                            {
                              id:"3",
                              name:"Angel Alicea",
                              numFavorites:"22",
                              numComments: "88",
                              numRoutines:"6",    
                              bio:'"You have got to go through hell to get to heaven. Purgatory bootcamp style."',
                              profilePic:"",
                              coverPic:"",
                              routines: ["1", "2", "3"],
                              activeSince: "April 11, 2015",
                              contact:"angel@purgatory.com",
                              location:"Miami, FL",
                              specialties: "Bootcamp, VIPR"
                            },
                            {
                              id:"4",
                              name:"Omar Sandoval",
                              numFavorites:"9",
                              numComments: "630",
                              numRoutines:"9",    
                              bio:'"My classes are difficult and intense - they are not for everyone. If you want to challenge your limits, then come see me."',
                              profilePic:"",
                              coverPic:"",
                              routines: ["0", "5", "4"],
                              activeSince: "July 21, 2015",
                              contact:"omar@titanmethod.com",
                              location:"New York, NY",
                              specialties: "Boxing, Combat"
                            },
                            {
                              id:"5",
                              name:"Jilian Michaels",
                              numFavorites:"30",
                              numComments: "890",
                              numRoutines:"11",    
                              bio:'"People think maximize your life means to get your sh*t together. But it means appreciating that you are capable of having more."',
                              profilePic:"",
                              coverPic:"",
                              routines: ["1", "2", "4"],
                              activeSince: "August 4, 2015",
                              contact:"jilian@michaels.com",
                              location:"Los Angeles, CA",
                              specialties: "Weight Loss"
                            }
                            ];


 var MOCK_ROUTINE_DATABASE = [{
                                  id: "0",
                                  name: "V - Core 1.2",
                                  trainer: "Val Pherson",
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
                                  trainer: "Val Pherson",
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
    "Val Pherson": require('image!val_profile'),
    "Chris Reede": require('image!chris_profile'),
    "Angel Alicea": require('image!angel_profile'),
    "Omar Sandoval": require('image!omar_profile'),
    "Jilian Michaels": require('image!jilian_profile'),
  };

  var coverImages = {
    "Ilaria Montague": require('image!ilaria_cover'),
    "Val Pherson": require('image!val_cover'),
    "Chris Reede": require('image!chris_cover'),
    "Angel Alicea": require('image!angel_cover'),
    "Omar Sandoval": require('image!omar_cover'),
    "Jilian Michaels": require('image!jilian_cover'),
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

  dropDownArrow(active){
    if (active) {
      return ( <Image source={require('image!drop_arrow_true')} style={styles.childBottomRightImageTrue}/> )
    } else {
      return ( <Image source={require('image!drop_arrow_false')} style={styles.childBottomRightImage}/>)
    };
  },

  getTrainer(trainer){
    for (var i = TRAINER_MOCK_DATABASE.length - 1; i >= 0; i--) {
      if (TRAINER_MOCK_DATABASE[i].name === trainer) {
        return TRAINER_MOCK_DATABASE[i]
      }
    };
  },

	render(){

    //var profile = TRAINER_MOCK_DATABASE[0];
    var profile = this.getTrainer(this.props.trainerName);

    var profileImage = profileImages[profile.name];
    var coverImage = coverImages[profile.name];
    var routines = this.getRoutines(profile.routines);

		return (
			<View style={styles.tester}>
        <Image source={coverImage} style={styles.coverImage}>
          <Image source={profileImage} style={styles.profileImage}/>
          <Text style={styles.trainerName1}>{profile.name} </Text>
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
              <View style={styles.childBottom}>
                <Text style={styles.childBottomLeft}>Routines</Text>
                {this.dropDownArrow(this.state.showRoutines)}
              </View>
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
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Bio</Text>
              {this.dropDownArrow(this.state.showBio)}
            </View>
            </TouchableHighlight>
          

          {this.state.showBio && (<Text style={styles.childBottomBio}>{profile.bio}</Text>)}
          
          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Active Since</Text>
            <Text style={styles.childBottomRight}>{profile.activeSince}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Specialties</Text>
            <Text style={styles.childBottomRight}>{profile.specialties}</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Contact</Text>
            <Text style={styles.childBottomRight}>{profile.contact}</Text>
          </View>

        </ScrollView>

			</View>
		)
	}
});

module.exports = UserTrainerShow