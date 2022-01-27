var some = function (arr, cb) {
    if (Array.isArray(arr)) {
        if (typeof cb === "function") {
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i],i,arr)){
                    return true;
                }
            }
        } else {
            throw new Error("parameter 2 is not a function or missing");
        }
    } else {
        throw new Error("parameter 1 is not an array");
    }
    return false;
};

const arr = [1, 2, 3];
const arr1 = [1, -2, 3, -4, 5];

var result = some(arr1,  function (item, i, arr) {
    return item <-3;
});

console.log(result);