var firmata = require('firmata');
var repl = require("repl");

if (process.argv[2] == null) {
    console.log("You need to supply a device to connect to");
    process.exit()
}

var board = new firmata.Board(process.argv[2], function(err) {

    if (err) {
        console.log(err);
        process.exit();
    }
    console.log('connected');

    //board.pinMode(ledPin, board.firmata.MODES.OUTPUT);
    // board.digitalWrite(13, 1)
    repl.start("board> ").context.board = board;
});
