"use sctrict"

// let windowWidth = window.innerWidth
// console.log(windowWidth)

// let windowHeight = window.innerHeight
// console.log(windowHeight)

// console.log(navigator.userAgent)

// if (navigator.userAgent.includes("Opera")) {
// 	console.log("Використовується браузер Opera")
// } else {
// 	console.log("Браузер не визначено")
// }

// console.log(navigator.platform)
// console.log(navigator.userAgentData.platform)

// console.log(location.href)

// location.href = "https://google.com"

// let goGoogle = confirm("Бажаєте перейти на сторінку пошуку Google?")

// if (goGoogle) {
// 	location.href = "https://google.com"
// }

// or

// goGoogle ? location.href = "https://google.com" : null

// alert("Hello")

// let confirmAnswer = confirm("You ok?")
// console.log(confirmAnswer)

// let promptAnswer = prompt("Quest?")
// console.log(promptAnswer)

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

// const bodyElement = document.body;

// const firstChild = bodyElement.firstElementChild;
// console.log(firstChild)

// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild)

// const bodyElement = document.body;

// const childElements = bodyElement.children;

// for (let i = 0; i < childElements.length; ++i) {
// 	console.log(childElements[i])
// }

// for (let childElement of childElements) {
// 	console.log(childElement)
// }

// const bodyElement = document.body;

// const previousSibling = bodyElement.previousElementSibling
// console.log(previousSibling)

// const nextSibling = bodyElement.nextElementSibling
// console.log(nextSibling)

// const parentElement = bodyElement.parentElement
// console.log(parentElement)

// const someObject = document.querySelectorAll(`.block__item`)
// console.log(someObject)

// const blockItem = document.querySelectorAll(`.block__item`)
// console.log(blockItem)

// blockItem.forEach((item) => {
// 	console.log(item)
// })

// const list = document.querySelector(`.block__list`)
// const isPageParent = list.closest(`li`)

// isPageParent ? console.log(`Yes, it is`) : console.log(`No, it isn't`)

// const listItems = document.querySelectorAll(`.block__item`)

// listItems.forEach(listItem => {
//     listItem.innerHTML = `<span>Hello</span>`
// })

// listItems.forEach(listItem => {
//     listItem.textContent = `<span>Hello</span>`
// })

// let newObject = document.createElement(`div`)
// newObject.innerHTML = `<span>Hello</span>`
// console.log(newObject)

// const page = document.querySelector(`.page`)
// page.append(newObject)

// const page = document.querySelector(`.page`)

// page.insertAdjacentHTML("afterend", `
// <ul class="block__list">
// <li class="block__item">1</li>
// <li class="block__item">2</li>
// <li class="block__item">3</li>
// <li class="block__item">4</li>
// <li class="block__item">5</li>
// </ul>`)

// const text = document.querySelector(`.block__text`)

// text.insertAdjacentText("beforeend", `Bye bye`)

// const page = document.querySelector(`.page`)

// const pageClone = page.cloneNode(true)
// console.log(pageClone)

// const page = document.querySelector(`.page`)
// page.remove()

// const page = document.querySelector(`.page`)
// page.className = "not-page"

// const page = document.querySelector(`.page`)

// page.classList.add(`pen`)
// page.classList.remove(`pen`)
// page.classList.toggle(`pen`)
// page.classList.contains(`pen`)

// let totalPadding = 15;
// page.style.paddingTop = `${totalPadding}rem`
// page.style.paddingTop = ``

// page.style.cssText = `background-color: #000;
// padding: 10px 30px 10px 80px;
// border: 1px solid #000;
// color: #fff;`

// page.style.color = `red`

// const page = document.querySelector(`.page`)

// const pageStyle = getComputedStyle(page)
// console.log(pageStyle)
// const pageFontSize = parseFloat(pageStyle.fontSize)
// console.log(pageFontSize)

// const page = document.querySelector(`.page`)

// let size = parseFloat(page.dataset.size)
// console.log(size)

// let newSize = size + 100
// console.log(newSize)

// page.dataset.size = 5000;

// const page = document.querySelector(`.page`)
// console.log(page.tagName)
// page.hidden = true;

// const mainElement = document.documentElement
// const windowClientWidth = mainElement.clientWidth
// const windowClientHeight = mainElement.clientHeight

// console.log(windowClientWidth)
// console.log(windowClientHeight)

// const windowScrollTop = window.scrollY
// console.log(windowScrollTop)

// window.scrollTo ({
//     top: 20,
//     behavior: "smooth"
// })

// const page = document.querySelector(`.block__list`)

// function scrollToBlock(element) {
// 	element.scrollIntoView({
		//"start", "center", "end". За замовчуванням "center".
// 	block: "start",
		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
// 	inline: "nearest",
// 	behavior: "smooth"
// })
// }
// scrollToBlock(page)


// ДЗ

// Задача №1
// Отримати в константу елемент <body>

// Відповідь:
// const bodyElement = document.body
// console.log(bodyElement)

// Пояснення: змінній bodyElement призначаємо тег body із html-документа і виводимо його в консоль

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Відповідь:
// const body = document.body 

// function addList(numberItems = 5) {
// 	body.insertAdjacentHTML("beforeend", `<ul class="list"></ul>`)
// 	const ulList = document.querySelector(`.list`)
// 	for (let i = 1; i <= numberItems; i++) {
// 		ulList.insertAdjacentHTML("afterbegin", `<li class="list__item">`)
// 	}
// }

// addList(2)

// Пояснення: Отримуємо body, створюємо функцію з параметром циклу за замовченням 1. Додаємо в кінці body список ul з класом list, в константу виводимо цей list.
// За допомогою циклу починаємо з 1 пункту, на кожному колі додаючи новий li до вказаного в параметрі значення або до 5 (за замовченням)

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Відповідь:

// const body = document.body 

// body.classList.add(`loaded`)

// if (body.classList.contains(`loaded`)) {
// 	body.style.color = `green`
// }

// Пояснення: отримуємо body, додаємо йому клас loaded. Якщо у боді є клас loaded, то змінюємо/додаємо властивість color на green

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Відповідь:
// const itemElements = document.querySelectorAll(`.box__item`)

// itemElements.forEach(itemElement => {
// 	itemElement.classList.add(`active`)
// })

// Пояснення: отримуємо колекцію елементів з класом box__item. Методом перебору масивів створюємо змінну itemElement, яка пройдеться по всім box__item і додасть їм клас active

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Відповідь:

// const btn = document.querySelector(`.footer__btn`)

// function scrollToBtn () {
// 	btn.scrollIntoView ({
// 		block: "end",
// 		behavior: "smooth"
// 	})
// }
// scrollToBtn()

// Пояснення: створюємо функцію в якій до константи, яка має в собі об'єкт з кнопкою буде прокручуватись сторінка так, щоб кнопка була в кінці. Поведінка прокрутки - плавно.
// Викликаємо функцію 

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Відповідь:

// let link = document.querySelector('.box__link')

// link.dataset.width = "100px"

// if(parseFloat(link.dataset.width) < "200") {
// 	link.style.color = "red"
// }

// Пояснення: створюємо дата атрибут зі значенням 100. Якщо значення цього атрибуту менше 200, то фарбуємо в червоний
