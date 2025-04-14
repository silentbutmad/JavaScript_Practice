/*

        function 

    function fun_name()
    {
    
    }

    fun_name()  //calling
*/

/*
        function expresions

    // A function expression is a way to define a function as a part of an expression .
    // It  can be either named or ananymous , if it's named, it becomes a named function expresion.
*/
    var result = function sum(a, b)
    {
        console.log(a + b);
    };

    //sum(10, 15);    //wrong
    result(10 , 15);  //correct

/*
        Anonymous Function

    // It is a function without name . 
    // It can be created using either function expresion or a function declaration without a specified name.
*/
    var result = function (a, b)
    {
        console.log(a + b);
    };

    result(10 , 15)

/*
        IIFE - immdiately Invoked function expression

    // an IIFE is a JavaScript function that is defined and executed immediately after its creation .
    //It is a way to create a self-contained block of code that doesn't interface with the surrounding code and executes immediately
    
    (function()
    {
    
    })();
*/

(function (a, b)
{
    console.log(a+b);
})(10,15);