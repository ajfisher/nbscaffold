var firmata = require("firmata")

if (process.argv[2] == null) {
    console.log("Please supply a device to connect to");
    process.exit();
}

// web server elements
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var board;

//
//
// Set up the application server
//

app.configure(function() {
    app.set('port', 8001);
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

server.listen(app.get('port'));


// Set up Socket IO
var io = require('socket.io').listen(server);
io.set('log level', 1);

console.log("MESSAGE: Web server now listening");

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
});

io.sockets.on("connection", function(socket) {

    if (board.ready) {
        socket.emit("connect_ack", {msg: "Welcome Control", state: "ONLINE"});
    } else {
        socket.emit("connect_ack", {msg: "Welcome Control", state: "NOPINS"});
    }

    socket.on("toggle", function(data) {
        // use the control mech to switch the LED on or off
        board.digitalWrite(pin, data.state);
    });


});

// SET up the arduino and firmata

var pin = 10; // led pin to turn on.
board = new firmata.Board(process.argv[2], function(err) {
    if (err){
        console.log(err);
        process.exit();
    }
    console.log("Control via your browser now");
});

