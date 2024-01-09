"use sctrict"

// let result = 6 !== "6";
// console.log(result)

// let result = !""
// console.log(typeof result)
// console.log(result)

// let result = "" || 12;
// console.log(result);
// console.log(Boolean(result));

// let result = 12 && "1fdgsfg";
// console.log(result);
// console.log(Boolean(result));

// let varOne = "asdasd";
// let varTwo = 40;

// if (varOne > varTwo) {
//     console.log ("Красаучег")
// } else if (varOne !== 0) {
//     console.log ("Кращий")
// } else {
//     console.log ("Не виходить нічо")
// }

// let varOne = "asd";
// let someVar = 20 > varOne ? "Все вийшло!" : "Нічо не виходить";
// console.log(someVar)

// if (20 > 40) {
//     console.log ("Все вийшло!")
// } else {
//     console.log ("Нічо не виходить")
// }

// let text = "Несе Галя воду"

// for (let i = 0; i < text.length; ++i) {
//     console.log(text[i])
// }

// let someArray = [256, "slovo", false];
// console.log(someArray)
// console.log(Array.isArray(someArray))
// console.log(someArray[3])

// for (i = 0; i < someArray.length; ++i) {
//     console.log(someArray[i])
// }

// someArray.forEach((value, index) => {
//     console.log(index);
//     console.log(value);
// });

// let names = ["Петя", "Vlad", "Ivan"]

// console.log(names)
// names.push("Andrew")
// console.log(names)

// console.log(names.includes("Andrew"))

// function showMessage() {
//     console.log("Я тут!")
// }

// showMessage()

// function showMessage(text) {
//     console.log(text)
// }

// showMessage("А я тут!")
// showMessage("Чудово!")

// const numOne = 111;
// const numTwo = 40;
// let result;

// function calcSum (a = 0, b = 0) {
//     const result = a + b;
//     showMessage(result)
// }
// function showMessage (someText = "Числа не задані") {
//     console.log(someText)
// }

// calcSum()





/*
Задача №1
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

Відповідь: 1
Пояснення: створюємо змінну someVar зі значенням 0. Інкрементом збільшуємо значення 0 на одиницю. Тепер значення стає 1.
Умова - якщо умова true, то вона виведе в консоль змінну someVar. Якщо false (наприклад, someVar = "текст"), то умова не спрацює і нічого не виведе в консоль

Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.

Відповідь: 
for (let i = 1; i <= 10; ++i) {
    console.log(`Пункт №${i}`);
}
Пояснення: для циклу умови i починається з 1, закінчується, коли i менше або дорівнює 10, на кожному колі циклу добавляючи 1 за допомогою інкременту
В консоль виведи "Пункт №" і змінну i

Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

Відповідь: нічого
Пояснення:
1. if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20")
Спочатку виконаються обчислення множення та ділення
2. if (false || false && true || false)
Далі виконаються оператори порівняння. 40 не менше і не дорівнює, 15 не менше 5, 10 = 10, число 20 не дорівнює рядку 20. === не змінює тип даних. Якби було ==, то було б true.
3. if (false || false || false)
Оператор "та" потребує, щоб усі операнди були true, а у нас уже є false
4. if (false) 
Оператор "або" потребує хоча б одного true, а у нас все false
5. В консоль нічого не попаде, бо умова не виконана. if виконується тільки, якщо умова - true

Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 

Відповідь: 
function calcDiv(a = 0, b = 0) {
	let result = a / b;
	if (typeof a !== "number" || typeof b !== "number") {
		console.log("Неправильний тип даних")
	} else if (b === 0) {
		console.log("На нуль ділити не можна")
	} else {
		console.log(`Результат ділення: ${result}`)
	}
}
calcDiv()

Пояснення: створюємо функцію з параметрами a та b, які за замовченням - 0. Створюємо змінну, яка буде проводити обчислення a / b. Створюємо умову при якій якщо тип даних a та b не 
є числом (number), то будемо бачити повідомлення про неправильний тип даних. Наступна умова, якщо параметр b = 0, то будемо бачити повідомлення що на нуль ділити не можна. 
Якщо жодна з умов не виконується (false), то будемо бачити повідомлення "Результат ділення" з додаванням результату ділення.
Як зробити повідомлення про відсутність значень поки не можу додуматись(( 

Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

Відповідь:
let someArray = ["hello", 5, 10, "10", "yellow", true];

someArray.forEach(value => {

	if(value === 10) {
		console.log(value)
	}
})

Пояснення: створюємо змінну масивів. Використовуємо метод перебору масивів forEach, value набува значення кожного масиву. Стрілочна функція, як я зрозумів, 
виконує роль (let i = 0; i < someArray.lenght; ++i) і перебирає кожен масив. Далі створюємо умову при якій якщо значення суворо дорівнює числу 10 без переведення типу даних, 
то в консоль виводити значення - 10.

*/
