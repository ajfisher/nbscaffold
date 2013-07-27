
var five = require('johnny-five');
var board = new five.Board({}, function(err) {
    console.log('connected');

    //board.pinMode(ledPin, board.firmata.MODES.OUTPUT);
    // board.digitalWrite(13, 1)

});
