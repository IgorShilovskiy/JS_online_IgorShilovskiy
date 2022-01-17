// введение переменных
var message, login;

login = '111';
// вариант в задаче

if (login == 'Pitter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = '';
}
console.log(message);
// вариант решения
var message = (login == 'Pitter')?message = 'Hi':
    (login == 'Owner')?message = 'Hello':
        (login == '')?message = 'unknown':
        message = '';
console.log(message);

