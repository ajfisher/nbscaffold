var five = require("johnny-five"),
        board;

board = new five.Board();

board.on("ready", function() {

    var servo  = new five.Servo({ pin:  8, type: 'continuous' });

    this.repl.inject({
        servo: servo
    });
});
