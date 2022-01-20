function f(a){
    if (typeof a === 'number'){
        if (a>0 && a<8){
            switch (a){
                case 1:
                    console.log('Воскресенье');
                    break;
                case 2:
                    console.log('Понедельник');
                    break;
                case 3:
                    console.log('Вторник');
                    break;
                case 4:
                    console.log('Среда');
                    break;
                case 5:
                    console.log('Четверг');
                    break;
                case 6:
                    console.log('Пятница');
                    break;
                case 7:
                    console.log('Суббота');
                    break;

            }
        }
        else {
            throw new Error('parameter should be in the range of 1 to 7')
        }

    }
    else {
        throw new Error('parameter type is not a Number')
    }
}



f(1); // Воскресенье
f(2); // Понедельник
f(5); // Четверг
//f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number