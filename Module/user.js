const events = require('events')

module.exports = class extends events.EventEmitter{ //Base class...using extends to inherit the event emitter class
    constructor(){
        super(); // Call the consructor of the event emmiter
    }
}