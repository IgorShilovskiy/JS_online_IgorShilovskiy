function isEven(a){
    if (typeof a === 'number'){
        if (a%2==0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    else{
        throw new Error('parameter type is not a Number')
    }
}

isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number