/**
 * [ Ideation / Mind Map ]
 * the idea is to change the flag into true at first slash found
 * then, we concat everything after the first slash into a string variable
 * finally, we change the flag into false at the second slash found
 */ 

let product_code = 'CG/2021/JKT/II' // let's user this as an example
let slash_found = false // this time, let's use boolean type of flag variable
let year = '' // declare it with an empty string for later concatenation

// let's do the iteration with for loop on product_code
for (let i = 0; i < product_code.length; i++) {
  if (product_code[i] === '/') { // let's do something if we meet a slash
    if (slash_found) {
      slash_found = false // turn slash_found into false, if it was true
      break // and since we're done, let's just break
    } else {
      slash_found = true // turn slash_found into true, if it was false
    }
  } else { // and do this if we meet other than slash
    if (slash_found) {
      // as long as slash_found is true, we concat the character to year
      year += product_code[i]
    }
  }
}

console.log(year) // finally, let's reveal the year


