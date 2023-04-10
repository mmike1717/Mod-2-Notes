
const sayMessage = require("../messages/say-message");

function sayHelloTo(name){
  sayMessage(`Hello ${name}!`);
}

sayHelloTo("woody")


module.exports = sayHelloTo;


// const sayMessage = require('../messages/say-messages.js')

// function sayHelloTo(name) {
//   sayMessage(`Hello ${name}!`)
// }

// sayHelloTo("Woody");

// module.exports = sayHelloTo
