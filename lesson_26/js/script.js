"use sctrict"

// const object = {
// 	name: "Andrew",
// 	age: 22
// }
// console.log(object)

// object.age = 23
// console.log(object)

// const someText = document.querySelector('.text')

// someText.addEventListener("mousemove", textReaction)

// function textReaction() {
// 	console.log("It Works!")
// }

// const texts = document.querySelectorAll('.text')

// texts.forEach(link => {
// 	link.addEventListener("click", textReaction)
// })

// function textReaction() {
// 	console.log("It Works!")
// }

// const texts = document.querySelectorAll('.text')

// texts.forEach(link => {
// 	link.addEventListener("mousemove", textReaction)
// })

// function textReaction(e) {
// 	console.log(e.target)

// 	console.log("It Works!")
// }

// const texts = document.querySelectorAll('.text')

// const links = document.querySelectorAll('.link')

// links.forEach (link => {
// 	link.addEventListener("click", linkReaction)
// })

// function linkReaction(e) {
// 	console.log('Click')

// 	e.preventDefault()
// }

// document.addEventListener("click", documentReaction)
// document.addEventListener("mousemove", documentReaction)

// function documentReaction (e) {
// 	const targetElement = e.target

// 	if(targetElement.closest('.link')) {
// 		console.log("Its a LINK")
// 	}
// }

// КНОПКА НАВЕРХ

// window.addEventListener("scroll", windowScroll)
// const upButton = document.querySelector('.up-button')

// function windowScroll(e) {
// 	console.log(window.scrollY)

// 	if (window.scrollY >= 500) {
// 		upButton.classList.add('active')
// 	} else {
// 		upButton.classList.remove('active')
// 	}
// }

// let options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 0.3,
// }

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target
//         if(entry.isIntersecting) {
//             targetElement.classList.add("active")
//             console.log("Я тебе бачу")
//         } else {
//             targetElement.classList.remove("active")
//             console.log("Я не бачу тебе")
//         }
//     });
// }

// const observer = new IntersectionObserver(callback, options)

// Якщо об'єкт один

// const target = document.querySelector('.up-button')
// observer.observe(target)

// Якщо об'єктів багато

// let someElements = document.querySelectorAll("[class*='--anim']")
// someElements.forEach(someElement => {
//     observer.observe(someElement)
// })

// function message () {
//     console.log('It works')
// }

// setTimeout(() => {
// 	message();
// }, 5000);

// let i = 5
// let timer = setInterval(() => {
//     console.log(i)
//     i === 1 ? clearInterval(timer) : --i
// }, 3000)


// document.addEventListener('click', documentAction)

// function documentAction(e) {
//     const targetElement = e.target

//     if(targetElement.closest('.icon-menu')) {
//         document.documentElement.classList.toggle('menu-open')
//     }
//     e.preventDefault()
// }

window.addEventListener("load", pageLoaded)

function pageLoaded (e) {
    const bodyElement = document.body 
    bodyElement.style.opacity = "1"
}

/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 

Відповідь: 

document.addEventListener('click', documentAction)

function documentAction (e) {
    const targetElement = e.target

    if (targetElement.closest('.header__item')) {
        targetElement.classList.toggle('active')
    }
}

Пояснення: 

Підслуховуємо весь документ на "клік". Далі функції привласнюємо параметр e, в який буде передаватись будь який клік на сторінці. Привласнюємо цей параметр константі. 
Далі перевіряємо чи є у натиснутого об'єкта клас header__item і якщо є, то при натисканні на item даємо клас active, при повторному - забираємо active

Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.

Відповідь: 

window.addEventListener("load", pageLoaded)

function pageLoaded (e) {
    const bodyElement = document.body 
    bodyElement.style.opacity = "1"
}

Пояснення: відстежуємо повне завантаження сайту. Через функцію отримуємо доступ до body та змінюємо значення властивості на 1


Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.

Відповідь:

const headerElement = document.querySelector('.header')
const footerElement = document.querySelector('.footer')
const mainElement = document.querySelector('.page')

headerElement.addEventListener("mouseenter", changeFooterColor)
headerElement.addEventListener("mouseleave", backFooterColor)

function changeFooterColor () {
    mainElement.hidden = true
    footerElement.style.backgroundColor = "green"
}

function backFooterColor () {
    mainElement.hidden = false
    footerElement.style.backgroundColor = "initial"
}

Пояснення: отримуємо в константи хедер, боді і футер. На хедер вішаєшо відстеження наведення миші і прибирання. Функція зміни кольору ховає main щоб ви бачили роботу функції зміни кольору
Далі змінюємо стиль заднього фону на зелений. Друга функція повертає минулий колір футера і заодно повертає main

Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

Відповідь: 
let item = document.querySelector(".item")
let delay = parseFloat(item.dataset.delay)
let start = parseFloat(item.dataset.start)
let end = parseFloat(item.dataset.end)
let timer

let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target

        if(entry.isIntersecting) { 
            observer.unobserve(item)
            
            let i = start;
            timer = setInterval(() => {
                item.textContent = `${i}`;
            i === end ? clearInterval(timer) : null;
            ++i;
            }, delay);
            
            console.log("Я тебе бачу")
        } 
    });
}

const observer = new IntersectionObserver(callback, options)

Якщо об'єкт один

observer.observe(item)

Пояснення: отримуємо в константи item та задані в html значення дата атрибутів затримки, початкового значення і кінцевого. В опціях задаємо спрацювання при повній появі об'єкту.
Далі функція методом перебору масивів передає об'єкти в константу і якщо об'єкт видно то зпускається інтервал який переймає в себе значення дата атрибутів і за допомогою textContent
вставляє цифри згідно заданих умов сетІнтервалу.

observer.unobserve(item) - зупиняє спостерігання за об'єктом

*/





