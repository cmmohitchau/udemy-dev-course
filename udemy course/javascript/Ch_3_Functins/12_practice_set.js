let marks = {
    Harry:78,
    Ram:90,
    Shyam:67,
    Krish:56
}
// Problem no.1
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are:"+ marks[Object.keys(marks)[i]])
}

// Problem no.2
for( let key in marks){
    console.log("The marks of " + key + "are:" + marks[key])
}

//  Problem no 3
let cn = 5
let i
while(i !=cn){
    i=prompt("Enter a number")
}
console.log("You have entered a correct number")