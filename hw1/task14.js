// введение переменных
var num=0;
var n=1000;

// вариант решения
while (n>=50){
    n=n/2;
    num++;
}
console.log('Результат ' + n + ' достигнут за ' + num + ' итераций');