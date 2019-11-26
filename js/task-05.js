"use strict";

// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt. Учти, пользователь
// может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки
// в указанную страну. Обязательно используй switch. Формат сообщения:
// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const countryName = prompt("Enter name of contry");

let countryNameLowerCase;
let firstLetterUpperCase;
let price = 0;

if (countryName === null) {
  alert("Жаль что отказываетесь");
} else if (countryName === "") {
  alert("Некорректно введены данные");
} else {
  countryNameLowerCase = countryName.toLowerCase();

  firstLetterUpperCase =
    countryNameLowerCase[0].toUpperCase() + countryNameLowerCase.slice(1);

  switch (firstLetterUpperCase) {
    case "Китай":
      price = 100;
      alert(`Доставка в Китай будет стоить ${price} кредитов`);
      break;
    case "Чили":
      price = 250;
      alert(`Доставка в Чили будет стоить ${price} кредитов`);
      break;
    case "Австралия":
      price = 170;
      alert(`Доставка в Австралия будет стоить ${price} кредитов`);
      break;
    case "Индия":
      price = 80;
      alert(`Доставка в Индия будет стоить ${price} кредитов`);
      break;
    case "Ямайка":
      price = 120;
      alert(`Доставка в Ямайка будет стоить ${price} кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
