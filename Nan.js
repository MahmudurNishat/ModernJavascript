
const a = isNaN(9)
console.log(a); // : output :false , karon 9 is a number , 

const c = isNaN("9")
console.log(c); // output :false , isNaN("9") returns false because the string "9" can be successfully converted to a number.

const b = isNaN("p")
console.log(b); // : output :true , its not a number , thats why true

const d = isNaN(4 - "hello") // 4 theke hello kibabe badd diba tai Nan 
console.log(d)  // : output :true , is Nan (Nan) true