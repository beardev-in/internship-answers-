//PROBLEM 3

//using set function and spread operator
var arr=[1,2,4,5,2,3,3,3];
var array1 = [...new Set(arr)];  //set function does not let elements in a collection to be repeated
console.log(array1);


//using forEach
var array = [1, 2, 4, 5, 2, 3, 3, 3];
let emptyObjTrue = {}
array.forEach(i => {
    if (!emptyObjTrue[i]) {  //checks wether the key [i] is there in the object or not, if not the obj is undefined and !undefined is true and therfore enters the if statement
        emptyObjTrue[i] = true; //stores the key along with the value in the object
    }
})
console.log(Object.keys(emptyObjTrue))
























