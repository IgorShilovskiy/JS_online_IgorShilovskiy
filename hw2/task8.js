function f(arr){
    if (typeof arr == 'object'){
    if (arr.length!=0){
        console.log(arr[0]);
        if (arr.length==1) {
            return;
        }
        else {
            f(arr.splice(1,arr.length-1));
        }

    }
    else {
        throw new Error('parameter can\'t be an empty')
    }
    }
    else {
        throw new Error('parameter type should be an array')
    }
}


f([1,2,3]);
// 1
// 2
// 3
f([1,2,3,4,5,6,7,8,9]);
//f(1,2,3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty