var socket; // used for everything.

var ledState = false; // off by default.

function toggleLED() {
    ledState = ! ledState;
    socket.emit("toggle", {state: ledState});
}

$(document).ready(function() {

    // do the even binding
    $("#button").bind("click", function() {
        toggleLED();
        if (ledState) {
            this.innerHTML = "Turn LED OFF";
        } else {
            this.innerHTML = "Turn LED ON";
        }
    });

    // set up the web sockets stuff.
    console.log("Setting up websockets");
   
    socket = io.connect(location.hostname);
    socket.on('connect_ack', function(data) {
        // we are actually connected
        console.log("Connected");
        if (data.state == "ONLINE") {
            console.log("Connected to server");
        } else {
            console.log("connected but nothing going on");
        }
    });

    socket.on("disconnect", function() {
        console.log("Disconnected");
    });
});
