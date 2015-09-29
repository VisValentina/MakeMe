
//*audio_player.js* 
'use strict';

/**
* This module is a thin layer over the native module. It's aim is to obscure * implementation details for registering callbacks, changing settings, etc.
*/

var React = require('react-native');
var AudioPlayerManager = require('NativeModules').AudioPlayerManager; 
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

var AudioPlayer = { 
	play: function(path) {
		AudioPlayerManager.playWithUrl(path); 
	},
	pause: function() { 
		AudioPlayerManager.pause();
	},
	stop: function() {
		AudioPlayerManager.stop(); 

		if (this.subscription) {
			this.subscription.remove(); 
		}
	} 
};

module.exports = AudioPlayer;