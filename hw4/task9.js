var arrayFill = function (a,b){
    var arr=[];
    if ((typeof a==='number')||(typeof a==='string')||(typeof a==='object')||(Array.isArray(a))){
        if (typeof b==='number'){
            for (var i=0;i<b;i++){
                arr[i]=a;
            }
        }
        else {
            throw new Error("parameter 2 is not a number");
        }
    }
    else {
        throw new Error("parameter 1 is not an array/object/string/number");
    }
    console.log(arr);
}



arrayFill('x',5); // [x,x,x,x,x]
arrayFill(1,10); // [1,1,1,1,1,1,1,1,1,1]
arrayFill('x','s'); // Error