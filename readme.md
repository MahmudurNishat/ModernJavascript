
     Know The Fundamentals Of JS Numbers < Start >///

var x = 45;
var y = 20;
console.log( x+ y); // output 65

var x = 45;
var y = "20";
console.log( x+ y); // output 4520 it will add both things

//var x = 45;
var y = parseInt(20.45); // it will out the fractional value that means it makes integer // output 20
console.log( y); output : 65.45

//var x = 20;
var y = parseInt("20") // if u want to convert any string("number") to number than use parseInt
console.log(x + y); output : 40

//var x = 20;
var y = parseInt("adfadsfa") // but it will not possible to convert any string ("string") to number using parseInt.
console.log( y); output : Not a Number // NaN

//var x = 20;
var y = parseInt("Twenty") // cause it not a number // but it will not possible to convert any string ("string") to number using parseInt.
console.log( y); output : Not a Number // NaN

//var x = 20;
var y = parseInt("adfadsfa") 
console.log( x + y); output : Not a Number // NaN // why ? cause if u add Nan + something , it will show nan .

//var x = 45;
var y = parseFloat(20.45); // it will not find any string to convert 
console.log(x + y); output 60.45

//var x = 45;
var y = parseFloat("20.45"); // it will make the number into float // output 20.45
console.log(x + y);

 parseFloat() can be useful when dealing with user input, such as form fields where users may enter numeric values as strings

//var x = 25;
var y = parseFloat("123abc456") >> u can use parseInt also , the result will same
console.log(y); output : 123

The string "123abc456" contains non-numeric characters after the numeric part. parseFloat() parses the string until it encounters a non-numeric character, in this case, "a", and stops parsing. It returns 123 as the floating point number. It's important to note that parseFloat() stops parsing as soon as it encounters a non-numeric character, which means it ignores the characters after the number.


//var x = 0.1
var y = 0.2
var total = x + y;
console.log(total); output : 0.30000000000000004 solution see down  use .toFixed() range 1 to 20 

//var x = 0.1
var y = 0.2
var total = x + y;
console.log(total.toFixed(1)); output : "0.3" // dosomiker por 1 gor ., tomi ciele 20 gor porjonto nite paro .but aetar ekta problem ase , aeta tofixed output ke string e convert kore , solution  see down 

//var x = 0.1
var y = 0.2
var total = x + y;
console.log(parseFloat(total.toFixed(2))) // output : 0.30 use parsefloat to get this in number (fractional) want to get integer use parseInt

//var x = 0.1
var y = 0.2
var total = x + y;
console.log(parseInte(total.toFixed(2))) // output : 0 but a number not a string 

// var x = 50;
   var y = 0 ;
   console.log(x/y) Output : infinity;

   // var x = -50;
   var y = 0 ;
   console.log(x/y) Output : -infinity;


sumup : if u want to convert any string ("Number") to intiger use parseInt 
        if u want to convert any string ("Number") to float use parseFloat 
        if u want 2fractional value after number use .toFixed (1to20) result string , use parsefloat

     Know The Fundamentals Of JS Numbers < End >///
=============================================================================
    
     Know The Js operator < start >///


var x = 40;
var y = 20;
var p = 11;
var q = 7
console.log(y+x); // Additional operator : output : 60

console.log(y-x); // substracion operator : output : -20

console.log(x*y); // Multifly  : output : 800

console.log(x/y); // divide : output : 2

console.log(x % y);// modulas/reminder/moduleOperator // output : 0  (40 ke (20 dea bag) kore bagses mane modulas ki thake  0 )

console.log(y % x); // output : 20 , 20 ke (40 dea bag) kore bagses mane modulas ki thake 20

console.log(p / q ); // output : 1.5714285714285714

console.log(parseFloat((p/q).toFixed(2))); // use tofixed and parsefloat output : 1.57

console.log( p % q); // 11 ke 7 dea bag korle (bagses thake 4) ;

var money = 45;
var money = 55 // assining value to 55 (never use this line )
money = 550; /// reassign  value ; when reassing never use again var
console.log(money) output : 550


var price = 1250;
price = price + 100; // now its called dynamic  , cause sudu tomar varible value change korlei noton price 
console.log(price)  output : 1350

var price = 1250;
price = price + 100; // now its called dynamic  , cause sudu tomar varible value change korlei noton price 
console.log(price) 
var newPrice = price + 40;
var discountedPrice = newPrice -10;
console.log(discountedPrice) output : 1380


sumup : We just learned All types operator and how they works .thats it


     Know The Js operator < End >///
