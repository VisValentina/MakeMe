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


var UserGo = React.createClass({

	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

	render(){
		return (	
			<View style={styles.tester}>
				<Image source={require('image!kickbox_go')} style={styles.backgroundImage}>
					
					<Image source={require('image!ilaria_profile')} style={styles.profileImage}/>
					<Text style={styles.routineName}>Powerstrike 2.0</Text>
					<Text style={styles.trainerName}>Ilaria Montague</Text>
				
					<View style={styles.playText}>
						<Text style={styles.xText}>X</Text>
						<Text style={styles.readyText}>Ready.</Text>
						<Image source={require('image!next_go')} style={styles.nextGo}/>
					</View>

				</Image>
			</View>
	)}
});

module.exports = UserGo