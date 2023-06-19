
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

*/

let hamburger = 3;
let fries = 0;

if (hamburger > 3 && fries > 0) {
    console.log("Ми поїли")
}

else console.log("Ми йдемо в інше кафе")

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price = 1900;

if (price >= 1000 && price <= 1900) {
    console.log("Ціна в диапазоні")
}
else console.log("Ціна поза діапазоном")

/*

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/
let price1 = 1901;

if (!(price1 >= 1000 && price1 <= 1900)) {
    console.log("Ціна поза діапазоном")
}
else console.log("Ціна в диапазоні")

if (price1 < 1000 || price1 > 1900) {
    console.log("Ціна поза діапазоном")
}
else console.log("Ціна в диапазоні")


/*

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 2;

if (season === 1) {
    console.log("Зима")
}
else if (season === 2) {
    console.log("Весна")
}
else if (season === 3) {
    console.log("Літо")
}
else if (season === 4) {
    console.log("Осінь")
}
else console.log("Такої порі року не існує")


/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

let a = 3;
let b = 2;
let c = 4;

if (a > b) {
    if (a < c) {
        console.log("a")
    }
    else if (a > c) {
        if (b > c) {
            console.log ("b")
        }
        else console.log("c")
    }
}
else if (a < b) {
    if (a > c) {
        console.log("a")
    }
    else if (a < c) {
        if (b < c) {
            console.log("b")
        }
        else console.log("c")
    }
}
    

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let dayNumber = 8;

switch (dayNumber) {
    case 1: console.log("Понеділок")
    break;

    case 2: console.log("Вівторок")
    break;

    case 3: console.log("Середа")
    break;

    case 4: console.log("Четвер")
    break;

    case 5: console.log("П'ятниця")
    break;

    case 6: console.log("Субота")
    break;

    case 7: console.log("Неділя")
    break;

    default: console.log("Такого дня тижня не існує")
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let mathOperator = '!';
let num1 = 6;
let num2 = 3;

switch(mathOperator) {
    case '+': console.log(num1 + num2)
    break;

    case '-': console.log(num1 - num2)
    break;

    case '*': console.log(num1 * num2)
    break;

    case '/': console.log(num1 / num2)
    break;

    default: console.log ("Невідома операція")
}

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/
let word = "Якесь слово"
let regExp = /[еиаоєяію]/giu;
let final = word.replace((regExp), '')

console.log(final)



/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

let meter = 21010;
let kilo = meter / 1000;
let meterName = 'метр';
let kiloName = 'кілометр'
let meterMessage;
let kiloMessage;

if (!Number.isInteger(kilo)) {
    kiloMessage = `${kilo} ${kiloName}а`
    if (meter % 10 == 1 && meter % 100 != 11) {
        meterMessage = `${meter} ${meterName} це `
        console.log(meterMessage + kiloMessage)
    }
    else if (meter % 10 >= 2 && meter % 10 <= 4)
    {
        meterMessage = `${meter} ${meterName}и це `
        console.log(meterMessage + kiloMessage)
    }
    else if (meter % 10 >= 5 || meter % 100 >= 11 && meter % 100 <= 19 || meter % 10 == 0) {
        meterMessage = `${meter} ${meterName}ів це `
        console.log(meterMessage + kiloMessage)
    }
}
else if (Number.isInteger(kilo)) {
    if ((kilo) % 10 == 1 && (kilo) % 100 != 11)
    {
        console.log(`${meter} ${meterName}ів це ${kilo} ${kiloName}`)
    }
    else if ((kilo) % 10 >= 2 && (kilo) % 10 <= 4)
    {
       console.log(`${meter} ${meterName}ів це ${kilo} ${kiloName}и`)
    }
    else if ((kilo) % 10 >= 5 || (kilo) % 100 >= 11 && kilo % 100 <= 19 || (kilo) % 10 == 0) {
        console.log(meterMessage = `${meter} ${meterName}ів це ${kilo} ${kiloName}ів`)
    }
}
