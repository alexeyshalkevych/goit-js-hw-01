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

const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;

if (countryName === null) {
  alert("Жаль что отказываетесь");
} else {
  switch (countryName.toLowerCase()) {
    case "китай":
      alert(`Доставка в Китай будет стоить ${chinaPrice} кредитов`);
      break;
    case "чили":
      alert(`Доставка в Чили будет стоить ${chilePrice} кредитов`);
      break;
    case "австралия":
      alert(`Доставка в Австралия будет стоить ${australiaPrice} кредитов`);
      break;
    case "индия":
      alert(`Доставка в Индия будет стоить ${indiaPrice} кредитов`);
      break;
    case "ямайка":
      alert(`Доставка в Ямайка будет стоить ${jamaicaPrice} кредитов`);
      break;
    default:
      alert(`В вашей стране доставка не доступна`);
  }
}
