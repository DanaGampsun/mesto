"use strict";
/*Сохраняем ссылки на все нужные элементы*/
const OpenProfileButton = document.querySelector(".profile__button")
const popup = document.querySelector(".popup")
const popupCloseButton = document.querySelector(".popup__button-close")

function openPopup() {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

OpenProfileButton.addEventListener("click", openPopup)
popupCloseButton.addEventListener("click", closePopup)
console.log(OpenProfileButton)

/*let popupInputName = document.getElementById(".profile_title")
let popupInputAboutMyself = document.getElementById(".profile-name")

const photoCardLike = document.querySelectorAll(".photo__card-like")*/



function openPopup() {
    popup.classList.add("popup_opened")
}

popupCloseButton.addEventListener("click", function() {
    console.log("header button clicked")
})
