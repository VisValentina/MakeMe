var React = require('react-native');
var LoginSignupLogo = require('./LoginSignupLogo');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Button = require('apsl-react-native-button');
var InputBackground = require('./inputBackground');
var InputBackgroundLeft = require('./inputBackgroundLeft');
var About = require('./About');
var Main = require('./Main');


Parse.initialize(
 'w1pd3PV2UMN7XGjlS3B4ZbWeaovH99ZPub8xH85U',
 'pXUDia29pk6RS4jhtRlCh4jvuy9WMjjjYNIVnfLV'
);

var {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  AlertIOS,
  TouchableHighlight
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
    marginTop: -65
  },
  tagLine: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 19,
    fontSize: 12
  },
  tagLineDirectionLeft: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 200,
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginRight: 45
  },
  tagLineDirectionRight: {
    color: '#e6e6e6',
    letterSpacing: 1,
    fontFamily: 'Raleway',
    marginTop: 200,
    fontSize: 11,
    letterSpacing: 1,
    textAlign: 'center',
    marginLeft: 45
  },
  makeRows: {
    flex: 1,
    flexDirection: 'row'
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 17

  },
  inputLogin: {
    height: 40,
    width: 330,
    borderColor: 'transparent',
    borderWidth: 2,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 15
  },
  nextSignup: {
    color: '#ce3c3c',
    marginTop: 12,
    fontSize: 15,
    fontFamily: 'Raleway',
    letterSpacing: 1
  }
});

var Login = React.createClass({

  getInitialState: function(){
    return {
      formType: 'login',
      password: '',
      username: '',
      newUsername: '',
      newPassword: '',
      newEmail: ''
    }
  },

  onUsernameChange: function(e) {
    this.setState({username: e.nativeEvent.text})
  },

  moveToPasswordField: function() {
    this._password.focus()
  },

  onPasswordChange: function(e) {
    this.setState({password: e.nativeEvent.text})
  },

  loginAuthentification() {
    var username = this.state.username;
    var password = this.state.password;
    this._username.setNativeProps({text: ''});
    this._password.setNativeProps({text: ''});

    // TODO NOTE remove the logout before production
    Parse.User.logOut();
    // We need to call the this.navigator inside a parse object.
    // The parse object doesn't have a this. navigator
    // So we assign this to another variable.

    var parent = this;

    Parse.User.logIn(username, password, {
      success: function(user) {
        AlertIOS.alert('You successfully logged in', 'moo',
          [{text: 'Okay', onPress: () => console.log('Success')}]
          );
        parent.props.navigator.push({
          component: Main
    })    
      },
      error: function(user) {
        console.log("Error: " + user.code + ' ' + user.message)
      }
    });
  },

  onNewUsernameChange: function(e) {
    this.setState({newUsername: e.nativeEvent.text})
  },

  moveToNewPasswordField: function() {
    this._newPassword.focus()
  },

  onNewPasswordChange: function(e) {
    this.setState({newPassword: e.nativeEvent.text})
  },

  onNewEmailChange: function(e) {
    this.setState({newEmail: e.nativeEvent.text})
  },

  signup() {
    var newUsername = this.state.newUsername;
    var newPassword = this.state.newPassword;
    var newEmail = this.state.newEmail;
    this._newUsername.setNativeProps({text: ''});
    this._newPassword.setNativeProps({text: ''});
    // this._newEmail.setNativeProps({text: ''});

    var User = new Parse.User();
    User.set("username", newUsername);
    User.set("password", newPassword);
    User.set("email", newEmail);

    var parent = this;

    User.signUp(null, {
      success: function(User) {
        // AlertIOS.alert('Signed up', 'booya!',
        //   [{text: 'yurp', onPress: () => console.log('Hoora!')}]
        // );
        parent.props.navigator.push({
          component: About
        })
      },
      error: function(User, error) {
        console.log("Error signup: " + error + ' ' + User);
      }
    });
  },

  showLoginForm(){
    this.setState({formType: 'login'});
  },

  showSignUp1Form(){
    this.setState({formType: 'signup1'})
  },

  showSignUp2Form(){
    this.setState({formType: 'signup2'})
    this._newEmail.setNativeProps({text: ''})
  },

  /* 
     Initial error was the TextInput components was not wrapped by a parent tag 
     It is like having two return statements. The complier checks to see if
     the first component tag and last component tag match.  This is a good 
     interview question.  I took the example for the index.ios.js page on how
     a function returned JSX code.  See renderScene.
     Notice I just took the View with style prop form the original.  
  */

  _renderLoginSignUpForm(){
    if(this.state.formType === 'login') {
      return (
        <InputBackgroundLeft>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputLogin} 
              placeholder="Username"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={this.onUsernameChange}
              onSubmitEditing={this.moveToPasswordField}
              ref={(c) => this._username = c}>
            </TextInput>
            <TextInput style={styles.inputLogin} placeholder="Password"
              ref={(c) => this._password= c}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
              onChange={this.onPasswordChange}
              onSubmitEditing={this.loginAuthentification}>
            </TextInput>
          </View>
        </InputBackgroundLeft>
        )
      } else if (this.state.formType === 'signup2'){
        return (
          <InputBackground>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputLogin} 
              placeholder="Create username"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={this.onNewUsernameChange}
              onSubmitEditing={this.moveToNewPasswordField}
              ref={(c) => this._newUsername = c}>
            </TextInput>
            <TextInput style={styles.inputLogin} placeholder="Create password"
              ref={(c) => this._newPassword= c}
              returnKeyType='go'
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              enablesReturnKeyAutomatically={true}
              onChange={this.onNewPasswordChange}
              onSubmitEditing={this.signup}>
            </TextInput>
            </View>
            </InputBackground>
        )
      } else {
        return (
        <InputBackground>
          <View style={styles.inputView}>
            <TextInput 
              style={styles.inputLogin} 
              placeholder="Email"
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType = 'email-address'
              enablesReturnKeyAutomatically={true}
              returnKeyType='next'
              onChange={this.onNewEmailChange}
              onSubmitEditing={this.showSignUp2Form}
              ref={(c) => this._newEmail= c}>
            </TextInput>
            <TouchableHighlight onPress={this.showSignUp2Form} >
              <Text style={styles.nextSignup}>Next</Text>
            </TouchableHighlight>
        </View>
        </InputBackground>
      )};
  },

  render() {

    return (
      <View style={styles.tester}>
        <Image source={require('image!Backdrop_sample')} style={styles.backgroundImage}>
          <LoginSignupLogo/>
          <Text style={styles.tagLine}>Exercise just got personal.</Text>
          {/* We need a view with styles to make this better, obviously */}
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight onPress={this.showLoginForm} >
            <Text style={styles.tagLineDirectionLeft}>LOG IN</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.showSignUp1Form}>
             <Text style={styles.tagLineDirectionRight}>SIGN UP</Text>
            </TouchableHighlight>
          </View>
            {/* This is where you call the function */}
            
              
              {this._renderLoginSignUpForm()}
              
            
        </Image>
      </View>
  )}
});

module.exports = Login