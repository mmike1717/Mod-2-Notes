// 1.
function sum(array) {
  let sum = 0;
  try{
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
} catch(error) {
  if(error instanceof TypeError) {
    console.error(error.message)
  }
}
  return sum;
}


let res = sum(null);
console.log(res);


// 2.
// tests


function sayName(name){
  if(typeof name !== "string") {
    throw new TypeError("Invalid name! Must be a string!");
  }
  console.log(name)
  // if(typeof name === "string") {

  //   return console.log(name)
  // }
  // else {
  //   try {
  //     throw new Error("Invalid name! Must be a string!")
  //   } catch(e){
  //     console.error(e)
  //   }
  // }

}

try{
sayName("Alex");
sayName(1);
} catch(e){
  console.error(e.message)
}



// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
      throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
greet(0)
} catch {
  console.log("Hello World")
}
