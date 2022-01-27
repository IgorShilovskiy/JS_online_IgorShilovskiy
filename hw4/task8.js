var f = function (arr) {
    sum=0;
    if (Array.isArray(arr)) {
        if (arr.length==0){
            return 0;
        }
        else {
            for (var i=0;i<arr.length;i++){
                if (Array.isArray(arr[i])){
                    sum=sum+f(arr[i]);
                }
                else if (typeof arr[i]=='number'){
                    sum=sum+arr[i];
                }
                else {
                    throw new Error("parameter is not an array or a number");
                }
            }
        }

    }
    else {
        throw new Error("parameter is not an array");
    }
    return sum;
}




const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3
const arr6 = [[[1, 2], [1, 2]], [[2, 1], [1, 's']]];
console.log(f(arr6)); // Error
