// represent the random number as an array of number
let array_of_number = [2, 4, 7, 9, 8, 2, 0, 1]

// declare a flag variable and assign it with false
// this is equivalent with declaring that we haven't find any 9 yet
let isFound = false

// use for loop to iterate array_of_number using i as the loop variable
for (let i = 0; i < array_of_number.length; i++) {
  // if we find 9, then we re-assign isFound with true
  // this is equivalent with declaring that we have found 9 at least once
  if (array_of_number[i] === 9) {
    isFound = true
  }
}

// at this point, we can tell whether we found 9 or not by evaluate isFound
if (isFound) {
  console.log("we find 9 among the numbers !!")
} else {
  console.log("9 is not among the numbers !!")
}