var React = require('react-native');
var Button = require('apsl-react-native-button');



var {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBarIOS,
  TouchableHighlight,
  AlertIOS
} = React;

var styles = StyleSheet.create({
   tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
    backgroundImage: {
		flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  trainerName: {
  	color: '#b3b3b3',
  	letterSpacing: 1.5,
  	fontFamily: 'Raleway',
  	marginTop: 14,
  	fontSize: 12
  },
   routineName: {
  	color: '#b3b3b3',
  	letterSpacing: 1.5,
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	marginTop: 19,
  	fontSize: 17
  },
  profileImage: {
    width: 95,
    height: 95,
    alignSelf: 'center',
    marginTop: 150
  },
  readyText: {
  	fontFamily: 'BebasNeue',
  	color: '#ce3c3c',
  	fontSize: 31,
  	letterSpacing: 2
  },
   xText: {
  	fontFamily: 'Raleway',
  	fontWeight: 'bold',
  	color: '#ce3c3c',
  	fontSize: 29,
  	letterSpacing: 2,
  	marginRight: 25
  },
  playText: {
  	flex: 1,
  	flexDirection: 'row',
  	marginTop: 140
	},
	nextGo: {
		marginTop: 7,
		height: 20,
		width: 32,
		marginLeft: 22
	}
});

  var goBackgroundImages = {
    core: require('image!core_go'),
    conditioning: require('image!conditioning_go'),
    boxing: require('image!boxing_go'),
    kickbox: require('image!kickbox_go'),
    strength: require('image!strength_go')
  };

    var profileImages = {
    "Ilaria Montague": require('image!ilaria_profile'),
    "Val Pherson": require('image!val_profile'),
    "Chris Reede": require('image!chris_profile'),
    "Angel Alicea": require('image!angel_profile'),
    "Omar Sandoval": require('image!omar_profile'),
    "Jilian Michaels": require('image!jilian_profile'),
  };

var MOCK_ROUTINE_PLAYLIST_RESULTS = [{
                                        name: "V - Core 1.2",
                                        trainer: "Val Pherson",
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
                                        trainer: "Val Pherson",
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

var UserGo = React.createClass({

  getDefaultProps: function (){
    return {
      routine: MOCK_ROUTINE_PLAYLIST_RESULTS[0]
    }
  },

	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

  alertDelete(routineName) {
    AlertIOS.alert(
      'Delete ' + routineName + ' from Playlist',
      'Are you sure?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled Delete by User')},
        {text: 'Yes', onPress: () => this.deleteFromPlaylistQueue(routineName)}
      ]
    )
  },

  deleteFromPlaylistQueue(routineName) {
    var Playlist = require('../Playlist/Playlist')

    this.props.navigator.push({
      component: Playlist,
      passProps: {routineName}
    });
  },

  showNextGo(routine){
    var nextRoutine = this.getNextRoutine(routine);
    var Go = require('./Go')

    this.props.navigator.replace({
      component: Go,
      passProps: {routine: nextRoutine,
                  routinePlayListDB: this.props.routinePlayListDB}
    })
  },

  getNextRoutine(currentRoutine){
    console.log("get the next routine after this " + currentRoutine);
    var data = this.props.routinePlayListDB;

    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].name === currentRoutine) {

        if (i === (data.length - 1)) {
          console.log("returning the first because it is last")
          console.log(data.length - 1);
          return data[0];
        } else {
          console.log("returning " + (i + 1) + " record")
          return data[(i + 1)];
        };
          
      };
    };

  },

	render(){

    var routine = this.props.routine;
    var image = goBackgroundImages[routine.category]
    var profileImage = profileImages[routine.trainer]
		return (	
			<View style={styles.tester}>
				<Image source={image} style={styles.backgroundImage}>
					
					<Image source={profileImage} style={styles.profileImage}/>
					<Text style={styles.routineName}>{routine.name}</Text>
					<Text style={styles.trainerName}>{routine.trainer}</Text>
				
					<View style={styles.playText}>
            <TouchableHighlight onPress={() => this.alertDelete(routine.name)}>
						<Text style={styles.xText}>X</Text>
            </TouchableHighlight>
						<Text style={styles.readyText}>Ready.</Text>
            <TouchableHighlight onPress={() => this.showNextGo(routine.name)}>
						<Image source={require('image!next_go')} style={styles.nextGo}/>
            </TouchableHighlight>
					</View>

				</Image>
			</View>
	)}
});

module.exports = UserGo