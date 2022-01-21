
function solution(a, b) {
    var res = [];
    var c =[];
    var len1=a.length;
    var len2=b.length;
    //проверка массивов на числа
    for (i of a){
        if (typeof i !== 'number'){
            throw new Error('parameter type is not a Number')
        }
    }
    for (i of b){
        if (typeof i !== 'number'){
            throw new Error('parameter type is not a Number')
        }
    }

    // поменяем массивы так, чтобы первый был длинее или равен второму
    if (len2>len1){
        c=a;
        a=b;
        b=c;
    }
    //переопределение длин массивов
    len1=a.length;
    len2=b.length;
    var one=0; // переходящая единица
    if (len1==0) {
        res=b;
    } else if (len2==0) {
        res=a;
    } else  {
        for (i=0;i<len1;i++){
            if (len2-i-1>=0){
                if (a[len1-i-1]+b[len2-1-i]+one<10){
                    res.unshift(a[len1-i-1]+b[len2-1-i]+one);
                    one=0;
                } else {
                    res.unshift(a[len1-i-1]+b[len2-1-i]+one-10);
                    one=1;
                }
            }
            else if (a[len1-i-1]+one<10){
                res.unshift(a[len1-i-1]+one);
                one=0;
            } else {
                res.unshift(a[len1-i-1]+one-10);
                one=1;
            }

        }
    }

if (one==1){
    res.unshift(1);
}
    return res;
}


console.log(solution([2, 4, 3], [6, 4])); // [3, 0, 7]
console.log(solution([2, 4, 3], [5, 6, 4])); // [8, 0, 7]
console.log(solution([1, 4, 5], [4, 4, 2])); // [5, 8, 7]
console.log(solution([1, 1, 1], [])); // [1, 1, 1]
console.log(solution([], [9, 9, 9])); // [9, 9, 9]
console.log(solution([9,9,9], [9,9,9])); // [1, 9, 9, 8]
console.log(solution([], [])); // []
console.log(solution([], [0])); // [0]
console.log(solution([0], [0])); // [0]
console.log(solution([1,1,1,1,1,1,1,1], [1, 0])); // [1, 1, 1, 1, 1, 1, 2, 1]
 console.log(solution([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],[1]));
// // // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]