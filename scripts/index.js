"use strict";
/*Сохраняем ссылки на все нужные элементы*/
const OpenProfileButton = document.querySelector(".profile__button")
const popup = document.querySelector(".popup")
const popupCloseButton = document.querySelector(".popup__button-close")

let formElement = document.querySelector(".popup__form")
let PopupNameInput = document.getElementById("name")
let PopupInputAboutMyself = document.getElementById("job")
let InputName = document.querySelector(".profile__title")
let InputAboutMySelf = document.querySelector(".profile__subtitle")


function openPopup() {
    popup.classList.add('popup_opened')

    PopupNameInput.value = InputName.textContent
    PopupInputAboutMyself.value = InputAboutMySelf.textContent
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    InputName.textContent = PopupNameInput.value;
    InputAboutMySelf.textContent = PopupInputAboutMyself.value;
    closePopup()
}

/*Добавляем логику в обработчики*/
OpenProfileButton.addEventListener("click", openPopup)
popupCloseButton.addEventListener("click", closePopup)
formElement.addEventListener("submit", formSubmitHandler)

popup.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
        closePopup()
    }
})




