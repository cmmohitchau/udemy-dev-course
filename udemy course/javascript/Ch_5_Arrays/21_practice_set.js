// practice set 5

// practice problem 1
// let arr = [1,2,3,4,5];
// let a = prompt("Enter your number");
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// practice problem 2
// do{
// let arr = [1,2,3,4,5];
// let a = prompt("Enter your number");
// a = Number.parseInt(a);
// console.log(arr)
// }while(a!=0)


// practice problem 3
// let arr = [22,10,20,30,44,5,56,];
// let a = arr.filter((element)=>{
//     return element%10 == 0
//    })
//    console.log(a)

// practice problem 4
// let arr = [9,10,2,4,5,6,];
// let a = arr.map((element)=>{
//     return element*element;
// })
// console.log(a)

let arr = [5,4,3,2,1];
let a = arr.reduce((x,y)=>{
    return x*y;
})
console.log(a)