// Your code here

const Employee = require('./employee');

const JohnWick = new Employee("John Wick", "Dog Lover");

const John = JohnWick.sayName.bind(JohnWick)
setTimeout(John,2000)

const JohnOccupation = JohnWick.sayOccupation.bind(JohnWick);
setTimeout(JohnOccupation,2000)
