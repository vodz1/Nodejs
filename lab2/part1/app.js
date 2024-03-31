// app.js
const { emitEvent, onEvent } = require('./myModule');

// Callback for 'userLoggedIn' event
function handleUserLoggedIn(username) {
  console.log(`User logged in: ${username}`);
}

// Callback for 'messageReceived' event
function handleMessageReceived(message) {
  console.log(`Received message: ${message}`);
}

// Register callbacks for events
onEvent('userLoggedIn', handleUserLoggedIn);
onEvent('messageReceived', handleMessageReceived);

// Emit events with data
emitEvent('userLoggedIn', 'Ahmed');
emitEvent('messageReceived', 'Welcome Bro!');
