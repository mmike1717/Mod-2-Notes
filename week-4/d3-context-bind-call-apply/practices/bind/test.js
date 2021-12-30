// Your code here
const { Employee } = require("./employee");

let john = new Employee("john wick", "dog lover");

// setTimeout(john.sayName, 2000)
// setTimeout(john.sayOccupation, 3000)

let sayNameBound = john.sayName.bind(john);
let sayOccupationBound = john.sayOccupation.bind(john);

// setTimeout(sayNameBound, 2000);
// setTimeout(sayOccupationBound, 3000);


