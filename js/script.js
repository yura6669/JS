if (2 * 4 == 8) {
    console.log('Правильно');
} else {
    console.log("Неправильно");
}

let num = 50;

if(num < 49) {
    console.log('Неправильно');
} else if(num > 100) {
    console.log('Забагато');
} else if(num >= 50) {
    console.log('Правильно');
}

(num >= 50) ? console.log('Правильно') : console.log('Неправильно');

switch (num) {
    case num < 49:
        console.log('Неправильно');
    break;
    case num > 100:
        console.log('Забагато');
    break;
    case num > 80:
        console.log('Все ще забагато');
    break;
    case 50:
        console.log('Правильно');
    break;
    default:
        console.log('Щось пішло не так');
    break;
}