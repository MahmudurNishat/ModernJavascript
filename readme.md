
     Know The Fundamentals Of JS Numbers < Start >///

     Javascript

     is high level and Intrepreted 
     Dynamically Update content
     controll multimedia
     Animate images
     jit compiled
     is life of internet

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
<br>
var y = 20;
<br>
var p = 11;
<br>
var q = 7
<br>
console.log(y+x); // Additional operator : output : 60 <br>

console.log(y-x); // substracion operator : output : -20 <br>

console.log(x*y); // Multifly  : output : 800 <br>

console.log(x/y); // divide : output : 2 <br>

console.log(x % y);// modulas/reminder/moduleOperator // output : 0  (40 ke (20 dea bag) kore bagses mane <br>modulas ki thake  0 )<br>

console.log(y % x); // output : 20 , 20 ke (40 dea bag) kore bagses mane modulas ki thake 20 <br>

console.log(p / q ); // output : 1.5714285714285714 <br>

console.log(parseFloat((p/q).toFixed(2))); // use tofixed and parsefloat output : 1.57 <br>

console.log( p % q); // 11 ke 7 dea bag korle (bagses thake 4) ; <br>

var money = 45; <br>
var money = 55 // assining value to 55 (never use this line ) <br>
money = 550; /// reassign  value ; when reassing never use again var <br>
console.log(money) output : 550 <br>


var price = 1250;
price = price + 100; // now its called dynamic  , cause sudu tomar varible value change korlei noton price 
console.log(price)  output : 1350

var price = 1250; <br>
price = price + 100; // now its called dynamic  , cause sudu tomar varible value change korlei noton price <br>
console.log(price)  <br>
var newPrice = price + 40; <br>
var discountedPrice = newPrice -10; <br>
console.log(discountedPrice) output : 1380 <br>


sumup : We just learned All types operator and how they works .thats it <br>


     Know The Js operator < End >///
=========================================================

     Know The Js Mathematical Operation Shorthand < start >///

        
/** <br>
 * * + ------ addition 
 * * - ------ subtraction
 * * * ------ Mulitiplication
 * * / ------ Divide
 * * % ------ Modulas
 * * ** ------ exponential 
 * 
 */ <br>

var x = 50; <br>
x = x + 60; // x value 110 <br>
var y = 60; <br>
console.log(x+y) // output : 170;<br>

var x = 50;<br>
x += 60; // x = x + 60; <br>
var y = 60;<br>
console.log(x+y) // output : 170;<br>

var x = 50;<br>
x -= 60; // x = x - 60; <br>
var y = 60;<br>
console.log(x+y) // output : 50;<br>

var orangePrice = 30;<br>
orangePrice *= 3 // orangePrice = orangePrice *3;<br>
console.log(orangePrice);<br>

sumup: we have learned all the shortcut of operators


     Know The Js Mathematical Operation Shorthand < End >///
     
=========================================================

     Know The Js Concatination < start >///

var x = "Mahmudur" <br>
var y = "Nishat" <br> 
console.log(x + y);  // output : MahmudurNishat <br>

var x = "Mahmudur" <br>
var y = "Nishat" <br>
console.log(x +" "+ y); // output : Mahmudur Nishat // use empty string to make gap between string <br>

var x = "40"<br>
var y = 20<br>
console.log(x + y);  // output : 4020 // but concat will only work in addition , rest of the operator dont<br> follow the rules.<br>


var x = "40"<br>
var y = 20<br>
console.log(x - y); // output : 20<br>

var x = "40"<br>
var y = 20<br>
console.log(x / y); // output : 2<br>

var x = "40"<br>
var y = 20<br>
console.log(x % y); // output : 0<br>

var x = "40"<br>
var y = 20<br>
console.log(x ** y); // output : 1.099511627776e+32<br>

var x = "40"<br>
var y = 20<br>
var z = 40<br>
console.log(x + y + z); // output : 402040<br>

var x = "40"<br>
var y = 20<br>
var z = 40<br>
console.log( y + z + x); // output : 6040 , ekane aage addition y and z jog kore then 40passe bosce <br>

var x = "40"<br>
var y = 20<br>
var z = "40"<br>
console.log( y + z + x); // output : 204040 , ekane 20then 40 40 pase bose gese.<br>   

sumup: we have learned Different way of concatination

      Know The Js Concatination < End >///
=========================================================

      Know The Js Important IsNan < start >///
=========================================================

const a = isNaN(9)
console.log(a); // : output :false , karon 9 is a number , 

const c = isNaN("9")
console.log(c); // output :false , isNaN("9") returns false because the string "9" can be successfully converted to a number.

const b = isNaN("p")
console.log(b); // : output :true , its not a number , thats why true

const d = isNaN(4 - "hello") // 4 theke hello kibabe badd diba tai Nan 
console.log(d)  // : output :true , is Nan (Nan) true

      Know The Js Important IsNan < end >///
=========================================================


      Complete all task  < start >///
======================================
      
      Task1
      You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input: <br>
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.<br>

Output:<br>
Print the result.<br>

Sample Input:<br>
1000<br>
700<br>

Sample Output:<br>
300<br>

solve: <br>

// Task 1 //<br>
var Wallet = 1000;<br>
var orange = 400;<br>
var apple = 300;<br>
var cost = orange + apple;<br>
var returns = Wallet - cost;<br>
console.log(returns); // output : 700<br>

     Task2
     Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input:<br>
The first line of the input is the marks of the five subjects mentioned above, respectively.<br>

Output:<br>
Print the result in 2 decimal places.<br>

Sample Input:<br>
75.25, 65, 80, 35.45, 99.50<br>

Sample Output:<br>
71.04<br>

// Task 2 //<br>
var Math = 75.25;<br>
var Bio = 65;<br>
var chem = 80;<br>
var phy = 35.45;<br>
var Ban = 99.50<br>

var TotalMark = Math + Bio + chem + phy + Ban ;<br>
var averages = TotalMark / 5<br>
console.log(parseFloat(averages.toFixed(2))) // output : 71.04<br>

      Task-3
      You task is to divide the given number by 5 and show the remainder as the output.
     
Input:<br>
The first line of the input contains the number.<br>

Output:<br>
Print the remainder.<br>

Sample Input:<br>
119<br>

Sample Output:<br>
4<br>

/// Task 3  ///<br>
var x = 119;<br>
var y = 119 % 5;<br>
console.log(y); // output  :4<br>


      Task-4
      What will be the result of the following codes:
var a = isNaN(‘11’);<br>

var a = isNaN(2-10);<br>

Explain your answers.<br>


/// task4 ////<br>
const a = isNaN("11") //it can be possible to 11string  to number thats why its a number <br>
console.log(a) // output : false<br>

const b = isNaN(2-10) // number : -8<br>
console.log(b) // output : false<br>


      Complete all task  < start >///
