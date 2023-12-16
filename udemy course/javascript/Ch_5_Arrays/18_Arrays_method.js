

//delete num[0]  //used to delete item but not the index
//console.log(num)

/*let newArray = num.concat(num1) //can be add more then two array using ,
console.log(newArray)
console.log(num , num1) */
// num.sort()
// console.log(num)   //it  sort alphabetically

// let compare = (a,b)=>{
//     return a-b
// }

// num.sort(compare)  //in ascending order
//   console.log(num)
// let num1= [11,22,33,44,55,66]
// num1.splice(2,3,5555,6666,7777)  //her 2 gives index, 3 gives number of items and rest are the items
// console.log(num1)
let num = [551,2,253,478,5,6,7,8]
// let r = num.slice(2);  //slice first two index
// console.log(r)
let r = num.slice(1,4)  // it remove index 1 to index 3
console.log(num ,r)  //slice and splice require newArray