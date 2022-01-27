var filter = function (arr, cb) {
    var arr1 = [];
    if (Array.isArray(arr)) {
        if (typeof cb === "function") {
            for (var i = 0; i < arr.length; i++) {
                if (cb(arr[i],i,arr)){
                    arr1.push(arr[i]);
                }
            }
            for (var i=0;i<arr1.length; i++){
                cb(arr1[i], i, arr1);
            }
        } else {
            throw new Error("parameter 2 is not a function or missing");
        }
    } else {
        throw new Error("parameter 1 is not an array");
    }
    return arr1;
};

const arr = [1, 2, 3];
const arr1 = [1, -2, 3, -4, 5];

var result = filter(arr1,  function (item, i, arr) {
    return item > -4;
});

console.log(result);
