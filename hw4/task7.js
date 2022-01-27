var arr = ['abcd', 'abcde', 'ab', 'abc'];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }

var arrLength = arr.map(function(arg){
    return arg.length;
});



console.log( arrLength ); // 4,5,2,3