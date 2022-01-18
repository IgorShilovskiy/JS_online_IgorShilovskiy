// введение переменных
var arr = [1,2,3,4,5,6];
var temp;

// вариант решения
for (i in arr) {
    for (j in arr) {
        if ((arr[j-1] < arr[j])&&(j>0)){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}

console.log(arr);