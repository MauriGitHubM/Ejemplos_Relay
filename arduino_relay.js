var five = require("johnny-five");
var board = new five.board();

board.on("ready", => (){
    this.repl.inject(
        {
            relay: new five.relay(
                {
                    pin: 12,
                    type: "nc"
                })
            
        });
    
});


