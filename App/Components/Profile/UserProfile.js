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
            <Image source={require('image!add_icon_button')} style={styles.playlistButtonIcon}/>
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

module.exports = UserProfile