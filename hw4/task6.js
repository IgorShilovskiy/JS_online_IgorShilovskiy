var reduce = function (arr, cb, acc) {
    if (Array.isArray(arr)) {
        if (typeof cb === "function") {
            if ((typeof acc==='number')||(typeof acc==='string')){
                for (var i = arr.length-1; i > -1; i--) {
                    if (cb(arr[i],i,arr)){
                        acc=acc+arr[i];
                    }
                }
            }
            else{
                throw new Error("parameter 3 is not a string or a number or missing");
            }
        } else {
            throw new Error("parameter 2 is not a function or missing");
        }
    } else {
        throw new Error("parameter 1 is not an array");
    }
    return acc;
};

const arr = [1, 2, 3];
const arr1 = [1, -2, 3, -4, 5];
const acc = 'str';

var result = reduce(arr1,  function (item, i, arr) {
    return item;
},acc);

console.log(result);