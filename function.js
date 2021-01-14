//Simple Function program to return sum of elemets of array
function addArr(myArr) {
    let sum = 0;
    for(let i =0;i< myArr.length;i++){
        sum = sum + myArr[i];    
    }
    return sum;
}

var arr =[20,10,17,8,9];
console.log (arr);
var sum = addArr(arr); //called a function
console.log("The sum of array element is :" + sum);