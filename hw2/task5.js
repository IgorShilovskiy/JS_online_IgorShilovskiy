var arr = [1, 2, -4, 3, -9, -1, 7];
var arr2=[];

function isPositive(a){
    if (typeof a === 'number'){
    if (a<0) {
        return false;
    }
    else {
        return true;
}
}
    else{
        throw new Error('parameter type is not a Number')
    }
}

for (a of arr){
    if (isPositive(a)){
        arr2.push(a);
    }
}

console.log(arr2);


