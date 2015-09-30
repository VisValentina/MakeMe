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
    height: 10
  },
  redArrowLeftHighlight: {
    position: 'absolute',
    left: 110,
    top: 25
  },
  redArrowRightHighlight: {
    position: 'absolute',
    right: 110,
    top: 25
  },
  redArrowRight: {
    width: 9,
    height: 10,
    position: 'absolute'
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
    fontFamily: 'HelveticaNeue-Light',
    color: '#ce3c3c',
    letterSpacing: 3,
    fontSize: 21,
    marginTop: -5,
    marginLeft: 2,
    backgroundColor: 'transparent'
  },
  minutesPopup: {
    flexDirection: 'row',
    width: 375,
    height: 50,
    backgroundColor: 'black'
  },
  childBottomLeftRed: {
    flex: 1,
    textAlign: 'left',
    fontSize: 13,
    fontFamily: 'Raleway',
    color: '#ce3c3c',
    alignSelf: 'center',
    paddingLeft: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
  childBottomRightRed: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'Raleway',
    color: '#ce3c3c',
    alignSelf: 'center',
    paddingRight: 30,
    letterSpacing: 1,
    backgroundColor: 'transparent'
  },
});

var MOCK_COMPLETED_ROUTINE_DATABASE = [{
                                  id: "0",
                                  name: "Tabata",
                                  trainer: "Angel Alicea",
                                  level: "3",
                                  category: "conditioning",
                                  dateCompleted: 'Mon, Oct 5'
                               },
                               {
                                  id: "1",
                                  name: "VIPR",
                                  trainer: "Omar Sandoval",
                                  level: "3",
                                  category: "strength",
                                  dateCompleted: 'Tues, Oct 6'
                               }
                              ];

  var MOCK_CALENDAR = [ "Oct 05 - Oct 11", "Sept 28 - Oct 4", "Sept 21 - Sep 27"];


  var images = {
    core: require('image!core'),
    conditioning: require('image!conditioning'),
    boxing: require('image!boxing'),
    kickbox: require('image!kickbox'),
    strength: require('image!strength')
  };


var UserProfile = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

  getInitialState() {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     return {
       dataSource: ds.cloneWithRows(MOCK_COMPLETED_ROUTINE_DATABASE),
       showCompletedRoutines: false,
       showMinutes: false,
       showWeekId: 0
     };
  },

  toggleCompletedRoutines(){
    this.setState({
      showCompletedRoutines: !this.state.showCompletedRoutines
    })
  },

  toggleShowMinutes(){
    this.setState({
      showMinutes: !this.state.showMinutes
    })
  },


  getRoutines(arr) {
    var routines = [];

    for (var i = MOCK_COMPLETED_ROUTINE_DATABASE.length - 1; i >= 0; i--) {
      for (var j = arr.length - 1; j >= 0; j--) {
        if (MOCK_COMPLETED_ROUTINE_DATABASE[i].id === arr[j]) {
          routines.push(MOCK_COMPLETED_ROUTINE_DATABASE[i]);
        };
      };
      
    };
    return routines;
  },

  handleWeekChange(direction){
    if (direction === "decrease") {
      this.setState({
        showWeekId: this.state.showWeekId + 1
      })
    } else {
      this.setState({
        showWeekId: this.state.showWeekId - 1
      })
    };
  },

  renderCompletedRoutine(routine) {
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

         <Text style={styles.routineLevel}>{routine.dateCompleted}</Text>
         
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

  showButton(direction){
    if(direction === "right") {
      return (
        <TouchableHighlight style={styles.redArrowRightHighlight} onPress={ () => this.handleWeekChange("increase")}>
          <Image source={require('image!userprofile_redarrowright')} style={styles.redArrowRight}/>
        </TouchableHighlight>
      )
    }
    else {
      return (
        <TouchableHighlight style={styles.redArrowLeftHighlight} onPress={ () => this.handleWeekChange("decrease")}>
              <Image source={require('image!userprofile_redarrow')} style={styles.redArrowLeft}/>
        </TouchableHighlight>
      )
    }
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


        <ScrollView style={styles.parentBottom} 
          automaticallyAdjustContentInsets={false} 
          contentContainerStyle={styles.parentBottom}>

          <View style={styles.childBottomArrows}>
            {this.state.showWeekId < MOCK_CALENDAR.length - 1 ? this.showButton("left") : <View />}
            
            <Text style={styles.childBottomDate}>{MOCK_CALENDAR[this.state.showWeekId]}</Text>
            {this.state.showWeekId != 0 ? this.showButton("right") : <View />}
          </View>

          <TouchableHighlight onPress={() => this.toggleCompletedRoutines()}>
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Completed</Text>
              {this.dropDownArrow(this.state.showCompletedRoutines)}
            </View>
          </TouchableHighlight>

          {this.state.showCompletedRoutines && ( 
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderCompletedRoutine}
              style={styles.listView}
              contentInset={{top: 64}}/>
          )}

          <TouchableHighlight onPress={() => this.toggleShowMinutes()}>
            <View style={styles.childBottom}>
              <Text style={styles.childBottomLeft}>Stats</Text>
              {this.dropDownArrow(this.state.showMinutes)}
            </View>
          </TouchableHighlight>

          {this.state.showMinutes && ( 
            <View>
              <View style={styles.minutesPopup}>
                <Text style={styles.childBottomLeftRed}>Done this week:</Text>
                <Text style={styles.childBottomRightRed}>2 routines</Text>
              </View>
              <View style={styles.minutesPopup}>
                <Text style={styles.childBottomLeftRed}>Minutes this week:</Text>
                <Text style={styles.childBottomRightRed}>88 minutes</Text>
              </View>
              <View style={styles.minutesPopup}>
                <Text style={styles.childBottomLeftRed}>Versus last week:</Text>
                <Text style={styles.childBottomRightRed}>13% Increase</Text>
              </View>
            </View>
          )}

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Intensity</Text>
            <Text style={styles.childBottomRight}>8% Increase</Text>
          </View>

          <View style={styles.childBottom}>
            <Text style={styles.childBottomLeft}>Email</Text>
            <Text style={styles.childBottomRight}>mjones@gmail.com</Text>
          </View>

        </ScrollView>


			</View>
		)
	}
});

module.exports = UserProfile