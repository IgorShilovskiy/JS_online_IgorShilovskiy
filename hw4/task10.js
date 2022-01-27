var reverce = function (arr) {
    var arr1=[];
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            throw new Error("the array is empty");
        } else {
            for (var i = arr.length - 1; i > -1; i--) {
                arr1.push(arr[i]);
            }
        }
    }
    else {
        throw new Error("parameter 1 is not an array");
    }
    return arr1;
};

const arr = [1, 2, 3];
const arr1 = [1, -2, 3, -4, 5];

var result = reverce(arr1);

console.log(result);