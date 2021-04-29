var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var relay = new five.Relay(10);

  // Control the relay in real time
  // from the REPL by typing commands, eg.
  //
  // relay.on();
  //
  // relay.off();
  //
  this.repl.inject({
    relay: relay
  });
});

/*
//Segunda forma que encontre para realizarlo//
var five = require("johnny-five");
  board = new five.Board();

board.on("ready", function() {
  var relay = new five.Relay(10);

  // From the REPL, toggle the lamp on and off by calling:
  //
  //   relay.toggle()
  //
  this.repl.inject({
    relay: relay
  });
});
*/
