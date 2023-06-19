/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function mcDonalds (hamburger, fries) {
    if (hamburger > 3 && fries > 0) {
        console.log("Ми поїли")
    }
    
    else console.log("Ми йдемо в інше кафе")
}

mcDonalds(4,3)

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

function priceCheck (price) {
    if (price >= 1000 && price <= 1900) {
        console.log("Ціна в диапазоні")
    }
    else console.log("Ціна поза діапазоном")
}

priceCheck(1000)

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

function priceCheckFirst (price) {
    if (!(price >= 1000 && price <= 1900)) {
        console.log("Ціна поза діапазоном")
    }
    else console.log("Ціна в диапазоні")
}

priceCheckFirst(2000);

function priceCheckSecond (price) {
    if (!(price >= 1000 && price <= 1900)) {
        console.log("Ціна поза діапазоном")
    }
    else console.log("Ціна в диапазоні")
}

priceCheckSecond(1000);

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

function season (seasonNumber) {
    if (seasonNumber === 1) {
        console.log("Зима")
    }
    else if (seasonNumber === 2) {
        console.log("Весна")
    }
    else if (seasonNumber === 3) {
        console.log("Літо")
    }
    else if (seasonNumber === 4) {
        console.log("Осінь")
    }
    else console.log("Такої порі року не існує")
}

season(3);

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

function middleNumber (firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber) {
        if (firstNumber < thirdNumber) {
            console.log(firstNumber)
        }
        else if (firstNumber > thirdNumber) {
            if (secondNumber > thirdNumber) {
                console.log (secondNumber)
            }
            else console.log(thirdNumber)
        }
    }
    else if (firstNumber < secondNumber) {
        if (firstNumber > thirdNumber) {
            console.log(firstNumber)
        }
        else if (firstNumber < thirdNumber) {
            if (secondNumber < thirdNumber) {
                console.log(secondNumber)
            }
            else console.log(thirdNumber)
        }
    }
}

middleNumber(5,8,6)



/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

function dayNumber (dayNumber) {
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
}

dayNumber(8);

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

function calculator (firstNumber, secondNumber, mathOperator) {
    switch(mathOperator) {
        case '+': console.log(firstNumber + secondNumber)
        break;
    
        case '-': console.log(firstNumber - secondNumber)
        break;
    
        case '*': console.log(firstNumber * secondNumber)
        break;
    
        case '/': console.log(firstNumber / secondNumber)
        break;
    
        default: console.log ("Невідома операція")
    }
}

calculator (4, 5, '*')

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

function removeVowels (string) {
    let regExp = /[еиаоєяію]/giu;
    let final = string.replace((regExp), '')
    
    console.log(final)
}

removeVowels('Привіт. Як справи?')

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/

function meterToKilo (meter) {
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
    if ((meter / 1000) % 10 == 1 && (meter / 1000) % 100 != 11)
    {
        console.log(`${meter} ${meterName}ів це ${kilo} ${kiloName}`)
    }
    else if ((meter / 1000) % 10 >= 2 && (meter / 1000) % 10 <= 4)
    {
       console.log(`${meter} ${meterName}ів це ${kilo} ${kiloName}и`)
    }
    else if ((meter / 1000) % 10 >= 5 || (meter / 1000) % 10 >= 11 && meter % 100 <= 19 || (meter / 1000) % 10 == 0) {
        console.log(meterMessage = `${meter} ${meterName}ів це ${kilo} ${kiloName}ів`)
    }
}
}

meterToKilo(3503)