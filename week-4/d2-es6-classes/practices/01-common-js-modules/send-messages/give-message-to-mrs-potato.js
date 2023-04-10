const sayHelloTo = require("./say-hello-to");

function messages(message){
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

messages("Hi Buzz")

module.exports = messages;

// const sayHelloTo = require('./say-hello-to')

// function giveMessageToMrsPotato(message) {
//   sayHelloTo("Mrs. Potato");
//   console.log(`(Psst... ${message})`)
// }

// giveMessageToMrsPotato("Hi Buzz");

// module.exports = giveMessageToMrsPotato;
