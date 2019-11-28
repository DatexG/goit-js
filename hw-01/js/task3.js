"use strict"

function task3(){

    const ADMIN_PASSWORD = 'qwerty'
    let = message 
    const userInput = prompt(`Введите пароль`)

    if (userInput === null) {
        message = "Отменено пользователем"
    } else if (userInput === ADMIN_PASSWORD) {
            message = "Добро пожаловть"
    } 

    else {
        message = "Доступ запрещен, неверный пароль"
    }

console.log (message)
}