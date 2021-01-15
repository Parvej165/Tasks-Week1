//for loop
var array = [15,20,25,30,35];
console.log("Displaying element using for loop of ", array);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log (element);
}

//while loop
// create an array of five random number between 1 and 10
let rands = [];
let count = 0;
const size = 5;
console.log("Displaying element using while loop :");
while(count < size) {
    rands.push(Math.round(Math.random() * 10));
    count++;
    console.log('The current size of the array is ' + count);
}

console.log(rands);

//do while loop
let i = 0;
do
   {
	console.log("while vs do-while\n");
   }while(i==1);
   console.log("Out of loop");

//for...in loop

var languages = { 
    first : "C", 
    second : "Java",  
    third : "Python", 
    fourth : "PHP",  
    fifth : "JavaScript" 
}; 
  
    // iterate through every property of the 
    // object languages and print all of them  
    for (itr in languages)  
    { 
        console.log(languages[itr]); 
    } 

//for...of loop
let arr = [ "Parvej", "Altaf", "Pratik" ];

    for (let i of arr) {
        console.log(i) ;
    }   