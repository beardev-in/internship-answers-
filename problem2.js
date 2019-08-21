//problem 2 solution 

const array = [11, 6, 7, 8, 9]
let emptyObject = {}
    var counter = 0;
    for(var i = 0; i<array.length; i++){
        for(var j = 1; j<array.length; j++){
            if(array[i]<array[j]){
                counter++
                if (counter==1){
                    emptyObject[array[i]]=array[j]
                  
                }
            }
            else {
                emptyObject[array[i]]=-1
            }
        }
        counter = 0;
    }
    
    console.log(emptyObject)

