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
  trainerName: {
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderWidth: 1,
    marginBottom: 45,
    alignSelf: 'stretch'
  },
  childBottom: {
    flex: 1,
    borderColor: '#333333',
    borderWidth: .5,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#cccccc',
    paddingTop: 23,
    paddingLeft: 30,
    letterSpacing: 1
  }
});

var TRAINER_MOCK_DATABASE = [
                            {
                              id:"",
                              name:"Ilaria Montague",
                              numFavorites:"",
                              numComments: "",    
                              bio:"",
                              profilePic:"",
                              coverPic:"",
                              routines: ["routineId1", "routineId2"],
                              activeSince: "",
                              contact:"",
                              location:"",
                              specialties: ["martial arts", "boxing"]
                            },
                            {

                            }
                            ];

 var ROUTINE_MOCK_DATABASE = [{},{}];

  var profileImages = {
    "Ilaria Montague": require('image!ilaria_profile'),
    "Valentina Pherson": require('image!ilaria_profile'),
  };

    var coverImages = {
    "Ilaria Montague": require('image!ilaria_cover'),
    "Valentina Pherson": require('image!ilaria_cover'),
  };

var UserTrainerShow = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){

    var profile = TRAINER_MOCK_DATABASE[0];

    var profileImage = profileImages[profile.name];
    var coverImage = coverImages[profile.name];

		return (
			<View style={styles.tester}>
        <Image source={coverImage} style={styles.coverImage}>
          <Image source={profileImage} style={styles.profileImage}/>
          <Text style={styles.trainerName}>Ilaria Montague</Text>
          <Text style={styles.location}>New York, NY</Text>
        </Image>


        <Image source={require('image!triple_red_bar')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>11 k</Text>
            <Text style={styles.child}>17</Text>
            <Text style={styles.child}>81</Text>
          </View>

          <View style={styles.parent}>
          <Text style={styles.childLow}>Favorited</Text>
          <Text style={styles.childLow}>Routines</Text>
          <Text style={styles.childLow}>Comments</Text>
          </View>
        </Image>

        <View style={styles.parentBottom}>
          <Text style={styles.childBottom}>Routines</Text>
          <Text style={styles.childBottom}>Bio</Text>
          <Text style={styles.childBottom}>Active Since</Text>
          <Text style={styles.childBottom}>Specialties</Text>
          <Text style={styles.childBottom}>Contact</Text>
        </View>

			</View>
		)
	}
});

module.exports = UserTrainerShow