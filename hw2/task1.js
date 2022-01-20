function f(a){
    if (typeof a === 'number'){
        console.log(a*a*a);
    }
    else {
        throw new Error('parameter type is not a Number')
    }
}

f(3); //27
f(2); // 8
f('Content'); // Error: parameter type is not a Number