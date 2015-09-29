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
  highlightButton: {
    marginLeft: 165,
    position: 'absolute',
    bottom: 69
  },
  playlistButtonIcon: {
    height: 30,
    width: 45
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
  childBottomArrows: {
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: .5,
    height: 60,
    justifyContent: 'center'
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
  listView: {
    marginBottom: -50,
    marginTop: -20
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
  childBottomDate: {
    color: '#ce3c3c',
    fontFamily: 'Raleway',
    alignSelf: 'center',
    fontSize: 14,
    letterSpacing: 1,
  },
  redArrowLeft: {
    width: 9,
    height: 10,
    position: 'absolute',
    left: 110,
    top: 25
  },
  redArrowRight: {
    width: 9,
    height: 10,
    position: 'absolute',
    right: 110,
    top: 25
  }
});

var UserProfile = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){
		return (
			<View style={styles.tester}>

				<Image source={require('image!userprofile_cover')} style={styles.coverImage}>
          <Image source={require('image!profile_martina')} style={styles.profileImage}/>

           <TouchableHighlight style={styles.highlightButton}>
            <Image source={require('image!edit_button')} style={styles.playlistButtonIcon}/>
           </TouchableHighlight>
          
          <Text style={styles.trainerName1}>FitMartin87</Text>

          <TouchableHighlight>
            <Text style={styles.location}>Strong</Text>
          </TouchableHighlight>
        </Image>

         <Image source={require('image!triple_red_bar')} style={styles.redBar}>
          <View style={styles.parent}>
            <Text style={styles.child}>204</Text>
            <Text style={styles.child}>37</Text>
            <Text style={styles.child}>Athlete</Text>
          </View>

          <View style={styles.parent}>
          <Text style={styles.childLow}>Avg. Minutes</Text>
          <Text style={styles.childLow}>Completed</Text>
          <Text style={styles.childLow}>Status</Text>
          </View>
        </Image>


        <View style={styles.parentBottom}>
          <View style={styles.childBottomArrows}>
            <Image source={require('image!userprofile_redarrow')} style={styles.redArrowLeft}/>
            <Text style={styles.childBottomDate}>Oct 05 - Oct 11</Text>
            <Image source={require('image!userprofile_redarrowright')} style={styles.redArrowRight}/>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Completed</Text>
            <Image source={require('image!drop_arrow_false')} style={styles.childBottomRightImage}/>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Minutes</Text>
            <Image source={require('image!drop_arrow_false')} style={styles.childBottomRightImage}/>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Intensity</Text>
            <Text style={styles.childBottomRight}>8% Increase</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Email</Text>
            <Text style={styles.childBottomRight}>mjones@gmail.com</Text>
          </View>

        </View>


			</View>
		)
	}
});

module.exports = UserProfile