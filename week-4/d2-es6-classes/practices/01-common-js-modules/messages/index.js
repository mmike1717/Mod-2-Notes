
const messages = require("../send-messages/give-message-to-mrs-potato");
const sayHelloTo = require("../send-messages/say-hello-to");


const message1 = "You are looking very spudly today!";
const message2 = "There's a good deal on mattresses tomorrow";
const message3 = "Do you like to do things in unnessarily complicated ways?"

function everyone(name){
    sayHelloTo(name);
    messages(message1);
    messages(message2);
    messages(message3)

}


everyone("Mr. Potato")



// const message1 = "You are looking very spudly today!";
// const message2 = "There's a good deal on mattresses tomorrow.";
// const message3 = "Do you like to do things in unnecessarily complicated ways?";



// module.exports = {message1, message2, message3};
