var firmata = require('firmata');
if (process.argv[2] == null) {
    console.log("You need to supply a device to connect to");
    process.exit()
}

var board = new firmata.Board(process.argv[2], function(err) {

    console.log('connected');

    board.pinMode(10, 1);
    var state = false;
    var interval = setInterval(function() {
        state = ! state;
        board.digitalWrite(10, state);
    }, 1000);
});
