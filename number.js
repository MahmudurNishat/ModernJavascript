
// single line comment : use only one line 

/** Multiline Comment
 *  use this with / and double star
 * 
*/
var x = 45;
var y = 20;
console.log( x+ y); // output 65

var x = 45;
var y = "20";
console.log( x+ y); // output 4520 it will add both things

var x = 45;
var y = parseInt(20.45); // it will out the fractional value that means it makes integer // output 20
console.log( y);

var x = 20;
var y = parseInt("20") // if u want to convert any string("number") to number than use parseInt 
console.log( y);

var x = 20;
var y = parseInt("adfadsfa") // but it will not possible to convert any string ("string") to number using parseInt.
console.log( y);

var x = 45;
var y = parseFloat(20.45); // it will not find any string , so as it is add 20.45 
console.log(x + y);

var x = 45;
var y = parseFloat("20.45"); // it will make the number into float // output 20
console.log(x + y);

var x = 25;
var y = parseFloat("123abc456")
console.log(y);

var x = 0.1
var y = 0.2
var total = x + y;
console.log(total.toFixed(1));

var x = 0.1
var y = 0.2
var total = x + y;
console.log(parseFloat(total.toFixed(2)))