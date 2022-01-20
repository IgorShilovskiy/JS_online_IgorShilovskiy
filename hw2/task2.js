function f(){
    var result=0;
    for (arg of arguments){
        if (typeof arg === 'number'){
            result=result+arg;
        }
        else {
            throw new Error('all parameters type should be a Number')
        }
    }
    console.log(result);
}

f(1,2,3,4,5,6,7,8,9); //45
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number