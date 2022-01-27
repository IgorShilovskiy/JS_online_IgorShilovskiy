var forEach = function (arr, cb) {
    if (Array.isArray(arr)) {
        if (typeof cb === "function") {
            for (var i = 0; i < arr.length; i++) {
                cb(arr[i], i, arr);
            }
        } else {
            throw new Error("parameter 2 is not a function or missing");
        }
    } else {
        throw new Error("parameter 1 is not an array");
    }
};

const arr = [1, 2, 3];

forEach(arr,  function (item, i, arr) {
    console.log("item: " + item + ", index: " + i + ', array: ', arr);
});

//forEach(arr);

