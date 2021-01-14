/*Primitive Datatypes:
Strings,Numbers,Boolean,Null,Undefined
& etc.
*/

//strings
var name ='Parvej';
console.log ("My name is " + name + " & " + "my datatype is " + typeof name);

//Numbers
var a =5;
let b =6;
const c = 4.5;
console.log("a =",a,",b =",b,",a+b =",a+b,"& c is a " + typeof c);

//Boolean
var boolVar = true;
console.log('Datatype of boolVar is ' + typeof boolVar);

//Null
var nullVar = null;
console.log(nullVar); 

//Undefined
var undefVar;
console.log(undefVar);

/*Reference datatypes:
Arrays,Objects,Functions & etc
 */

 //Arrays
 var myArr = [1,2,56,78,9,23];
 console.log("My array has following elements "+ myArr);

  //Objects
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}
console.table(car);

//Functions
var greeting = function(){ 
    return "Hello World!"; 
}
console.log(greeting(),typeof greeting);