//1st method - answer 
const rotate = function(){
    var array1 = [1,2,3,4,5];
    var n = 5; //number elements in an array
    var d = 2; //number of elements you want to rotate
    for(var i=0; i<d; i++){
         array1.push(array1[i])
    }
    array1.splice(0, 2) 
    console.log(array1)
}
rotate()

//2nd method
const rotate1 = function(){
var arr = [ 1, 2, 3, 4, 5 ];
var d = 3;
var n = arr.length;
var temp;
for (let i = 0; i < d; i++) {
    temp = arr[0];
    for (var j = 0; j < n; j++) {
        arr[j] = arr[j + 1];
    }
    arr[n - 1] = temp;
}
console.log(arr);
}
rotate1()