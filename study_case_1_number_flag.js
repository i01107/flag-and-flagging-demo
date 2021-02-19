// represent the random number as an array of number
let array_of_number = [2, 4, 7, 9, 8, 2, 0, 1]

// declare a counter variable and assign it with 0
// this is equivalent with declaring that we will start to count from 0
let counter = 0

// use for loop to iterate array_of_number using i as the loop variable
for (let i = 0; i < array_of_number.length; i++) {
  // if we find 9, then increment the counter by 1
  // this is equivalent with declaring that we have found a 9
  // and,,, let's counting
  if (array_of_number[i] === 9) {
    counter++
  }
}

// at this point, we can tell whether we found 9 or not by evaluate counter
// even better we can also tell how many 9 we found
if (counter > 0) {
  console.log(`we find ${counter} 9 among the numbers !!`)
} else {
  console.log(`9 is not among the numbers !!`)
}