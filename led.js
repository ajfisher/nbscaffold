var firmata = require('firmata');
var repl = require("repl");

var board = new firmata.Board('/dev/tty.usbserial-A800ewCm', function(err) {
    console.log('connected');

    //board.pinMode(ledPin, board.firmata.MODES.OUTPUT);
    // board.digitalWrite(13, 1)
    repl.start("board> ").context.board = board;
});
