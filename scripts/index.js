"use strict";
/*Сохраняем ссылки на все нужные элементы*/
const OpenProfileButton = document.querySelector(".profile__button")
const popup = document.querySelector(".popup")
const popupCloseButton = document.querySelector(".popup__button-close")

/*Вешаем обработчик событий*/
function openPopup() {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

/*Добавляем логику в обработчики*/
OpenProfileButton.addEventListener("click", openPopup)
popupCloseButton.addEventListener("click", closePopup)

popup.addEventListener("click", function(event){
    if(event.target === event.currentTarget) {
        closePopup()
    }
})


// Находим форму в DOM
let formElement = document.querySelector(".popup__form")
    let nameInput = document.querySelector(".popup__input_name")
    let jobInput = document.querySelector(".popup__input_about_myself")

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function formSubmitHandler (evt) {
        evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
        // Так мы можем определить свою логику отправки.
        // О том, как это делать, расскажем позже.

        // Получите значение полей jobInput и nameInput из свойства value

        // Выберите элементы, куда должны быть вставлены значения полей

        // Вставьте новые значения с помощью textContent
    }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



