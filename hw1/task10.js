// введение переменных
var arr = [6,5,4,3,2,1];
var temp;

// вариант решения
for (i in arr) {
    for (j in arr) {
        if ((arr[j-1] > arr[j])&&(j>0)){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}

console.log(arr);