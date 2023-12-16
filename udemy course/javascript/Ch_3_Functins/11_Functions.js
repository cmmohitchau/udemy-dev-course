function avgofnum(x,y){
    return Math.round((x+y)/2);
}
let a = 6;
let b = 8;
let c = 9;

console.log("The average of a and b is:"+avgofnum(a,b));
console.log("The average of b and c is:"+avgofnum(b,c));
console.log("The average of a and c is:",+avgofnum(a,c));