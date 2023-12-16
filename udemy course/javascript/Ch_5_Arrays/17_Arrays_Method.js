//Array Methods
let num = [1,2,3,4,5,6]
let b = num.toString();  //changing to string
console.log(typeof(b))
let c = num.join("-") //joining to -
console.log(c)
console.log(typeof(c))  //it is string type
let r = num.pop()  //changing the same array and eleminating the last item
console.log(num,r);  //r is the last popped item

num.push(56);  // used to add item in last index
console.log(num)
let x = num.shift()   //used to remove first index item
console.log(x,num) 
let y = num.unshift(66);
console.log(num)  //used to add first index item