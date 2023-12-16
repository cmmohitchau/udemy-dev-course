// problem no 1

const str = "The quick brown fox jumps over the lazy dog";
const word = 'fox';
console.log(str.includes(word))
console.log(`The word "${word}" ${str.includes(word) ? 'is' : 'is not' } in the sentence`)

// problem no 2
let str1 = "please give me Rs 1000" //Extract value in the given problem
let value = str1.slice("please give me Rs ".length)
console.log(value)