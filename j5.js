var five = require("johnny-five");

var board = five.Board();

board.on("ready", function() {

    var pin = 13;

    var led = new five.Led(pin);
    this.repl.inject({
        led:led,
    });

});
