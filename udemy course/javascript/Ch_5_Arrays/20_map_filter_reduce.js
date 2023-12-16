let arr = [2,3,5,6,7]

// Array map method
//they don't modify the original array
let a =arr.map((element,index,array)=>{       //it makes new array by performing new operation
    console.log(element,index,array); //can give element ,index or array
    return element+3;
})
console.log(a)

// Array filter method
let arr2 = [45,66,78,9,4,5,7];
let a2 = arr2.filter((element)=>{
   return element < 10
})
console.log(a2)

// Array reduced method 
let arr3 = [4,5,6,7,3];
let x = arr3.reduce((h1,h2)=>{
    return h1+h2;  //just like fibonacci series
})
console.log(x)