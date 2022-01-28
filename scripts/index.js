"use strict";
/*Сохраняем ссылки на все нужные элементы*/
const openProfileButton = document.querySelector(".profile__button")
const popup = document.querySelector(".popup")
const popupCloseButton = document.querySelector(".popup__button-close")

let formElement = document.querySelector(".popup__form")
let popupNameInput = document.getElementById("name")
let popupInputAboutMyself = document.getElementById("job")
let inputName = document.querySelector(".profile__title")
let inputAboutMySelf = document.querySelector(".profile__subtitle")


function openPopup() {
    popup.classList.add('popup_opened')

    popupNameInput.value = inputName.textContent
    popupInputAboutMyself.value = inputAboutMySelf.textContent
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    inputName.textContent = popupNameInput.value;
    inputAboutMySelf.textContent = popupInputAboutMyself.value;
    closePopup()
}

/*Добавляем логику в обработчики*/
openProfileButton.addEventListener("click", openPopup)
popupCloseButton.addEventListener("click", closePopup)
formElement.addEventListener("submit", formSubmitHandler)






