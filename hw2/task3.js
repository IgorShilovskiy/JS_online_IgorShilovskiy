function f(a,b,c){
    var result=0;
    if (c!=0) {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
            result = (a-b)/c;
        }
        else {
            throw new Error('all parameters type should be a Number')
        }
    }
    else {
        throw new Error('division by zero')
    }
    console.log(result);
}

f(9,3,2); // 3
//f(9,3,0); // Error: division by zero
f('s',9,3) // Error: all parameters type should be a Number