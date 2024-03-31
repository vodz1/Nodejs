// eventModule.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Emit function
function emitEvent(eventName, eventData) {
  console.log(`Emitting event: ${eventName}`);
  myEmitter.emit(eventName, eventData);
}

// On function
function onEvent(eventName, callback) {
  console.log(`Registering callback for event: ${eventName}`);
  myEmitter.on(eventName, callback);
}

module.exports = {
  emitEvent,
  onEvent,
};
