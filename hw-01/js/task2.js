"use strict"

function task2() {

    const total = 100;
    let ordered = 90;

    let isEnough = ordered <= total;
    let message = null;

    if (isEnough) {
        message = `"Заказ оформлен, с вами свяжется менеджер"`
    } else {
        message = `"На складе недостаточно твоаров!"`
    }
     
alert (message)

}
