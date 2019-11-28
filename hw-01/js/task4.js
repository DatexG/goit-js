"use strict"

function task4() {


    const credits = 23580;
    const pricePerDroid = 3000;
    const amountDroid = prompt(`Kоличество дроидов которые хотите купить`)
    let message
    const totalprice = amountDroid * pricePerDroid
    const lastword = credits - totalprice

    if (amountDroid === null) {
        message = 'Отменено пользователем!' ;
        }  else if (totalprice > credits) {
            message = 'Недостаточно средств на счету!';
        }   else {
            message = `Вы купили \"${amountDroid}"\ дроидов, на счету осталось \"${lastword}"\ кредитов.`;
        }    
    console.log(message);   
    }



