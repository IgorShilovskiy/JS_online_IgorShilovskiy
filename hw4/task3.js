var every = function (arr, cb) {
    var flag = false;
    if (Array.isArray(arr)) {
        if (typeof cb === "function") {
            if (cb(arr[0],0,arr)){
                flag = true;
            }
            else {
                return false;
            }
            for (var i = 1; i < arr.length; i++) {
                if (!(cb(arr[i],i,arr))){
                    flag=false;
                }
            }
        } else {
            throw new Error("parameter 2 is not a function or missing");
        }
    } else {
        throw new Error("parameter 1 is not an array");
    }
    return flag;
};

const arr = [1, 2, 3];
const arr1 = [1, -2, 3, -4, 5];

var result = every(arr1,  function (item, i, arr) {
    return item > -5;
});

console.log(result);