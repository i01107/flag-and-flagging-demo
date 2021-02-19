/**
 * [ Ideation / Mind Map ]
 * the idea is to increment the counter by 1 each time we meet a slash
 * then, we concat everything after the first slash into a string variable
 * in other words, we will do the concatenation when the counter contain 1
 * why 1 ? because we want to get the year
 *   and the year exist when our counter contain 1
 */ 

let product_code = 'CG/2021/JKT/II' // let's user this as an example
let counter = 0 // this time, let's use a counter and use it to perform flagging
let year = '' // declare it with an empty string for later concatenation

// let's do the iteration with for loop on product_code
for (let i = 0; i < product_code.length; i++) {
  if (product_code[i] === '/') { // let's do something if we meet a slash
    counter++ // increment the counter
  } else { // and do this if we meet other than slash
    if (counter === 1) { // as mentioned on our ideation above
      // as long as our counter contain 1, we concat the character to year
      year += product_code[i]
    }
  }
}

console.log(year) // finally, let's reveal the year


