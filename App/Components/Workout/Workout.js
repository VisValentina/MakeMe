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
  readyText: {
    fontFamily: 'BebasNeue',
    color: '#ce3c3c',
    fontSize: 31,
    letterSpacing: 2
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    width: 375,
    height: 650,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  xText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#ce3c3c',
    fontSize: 29,
    letterSpacing: 2,
    marginRight: 30
  },
  pauseText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#ce3c3c',
    fontSize: 29,
    letterSpacing: 3,
    marginLeft: 25
  },
});

var Workout = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},

getInitialState() {
 return {
  showOption: false
 } 
},

toggleOptions() {
  this.setState({
    showOptions: !this.state.showOptions
  })
},

showOptions(){
  if (this.state.showOptions) {
    return (
    <View style={styles.backgroundImage}>
      <Text style={styles.xText}>X</Text>
      <Text style={styles.readyText}>VIDEO.</Text>
      <Text style={styles.pauseText}>II</Text>
    </View>
    )
  }
  else {
    return (
    <View>
    </View>
    )
  }
},

	render(){
		return (
			<View style={styles.tester}>
          
          <TouchableHighlight onPress={this.toggleOptions}>
            <View style={styles.backgroundImage}>
    					
    					{this.showOptions()}
              
            </View>
          </TouchableHighlight>

     
			</View>

    )
  }

});

module.exports = Workout