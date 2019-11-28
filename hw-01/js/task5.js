"use strict"

function task5()
{
    const avarage = prompt('Оформить доставку товара к себе в страну');
    let amountPrice

    if (avarage !== null) {
        avarage = inputmessage.toLowerCase();
    

    switch (country) {
        case Китай:
            amountPrice = 100;
        break;
        case Чили:
            amountPrice = 250;
        break;
        case Австралия:
            amountPrice = 170;
        break;
        case Индия:
            amountPrice = 80;
        break;    
        case Ямайка:
            amountPrice = 120;
        break; 
        default: console.log('В вашей стране доставка не доступна')
    }   
    } else {
        alert('decline by user')
    }

    if (amountPrice) {
        console.log ('Доставка в ${avarage} будет стоить ${amountPrice} кредитов')
    }

}