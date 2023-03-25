function isFive(num) {
  // Your code here
}

function isOdd(number) {
  // Your code here
}

function myRange(min, max, step = 1) {
  // Your code here
  let arr = []
  for (let i = min; i <= max; i += step){
    arr.push(i)
  }
  return arr
}


module.exports = { isFive, isOdd, myRange };
