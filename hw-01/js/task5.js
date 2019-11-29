"use strict"

function task5()
{
    let avarage = prompt('Оформить доставку товара к себе в страну');
    let amountPrice

    if (avarage !== null) {
        avarage = avarage.toLowerCase();
    

    switch (avarage) {
        case `китай`:
            amountPrice = 100;
        break;
        case `чили`:
            amountPrice = 250;
        break;
        case `австралия`:
            amountPrice = 170;
        break;
        case `индия`:
            amountPrice = 80;
        break;    
        case `ямайка`:
            amountPrice = 120;
        break; 
        default: console.log('В вашей стране доставка не доступна')
    }   
    } else {
        alert('decline by user')
    }

    if (amountPrice) {
        console.log (`Доставка в ${avarage} будет стоить ${amountPrice} кредитов`)
    }

}