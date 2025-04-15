/*
    Assignment
    arithmetic
    comparison
    logical
    string
    typeof
    conditional(ternary)

*/

var mynum = 10;
var name = 'mohit';


var result = name/mynum;   
console.log(result);        //NaN

var result=0.1+0.2;
console.log(result)        //0.30000000000000004

// 0.1 in binary is an infinite repeating binary fraction.
// 0.2 is also an infinite binary fraction.
// When the computer adds them, it uses a limited number of bits (usually 64 bits), so it rounds the result to the nearest representable value.

// ternary (  ?  :  ; )
var age=19
result = age>=18? "vote" : "not vote"
console.log(result)

