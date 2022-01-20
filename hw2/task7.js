function getDivisors(a){
    var arr=[1];
    if (typeof a === 'number'){
        if (a>0) {
            for (i=2;i<a;i++){
                if (a%i==0){
                    arr.push(i);
                }
            }
            arr.push(a);
        }
        else {
            throw new Error('Error: parameter can\'t be a ' + a)
        }

    }
    else {
        throw new Error('parameter type is not a Number')
    }
    console.log(arr);
}



getDivisors(12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0