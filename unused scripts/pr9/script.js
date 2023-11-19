let registration = prompt('Желаете пройти регистрацию на сайте? (Да/Нет)');
while (registration.toLowerCase() !== 'да') {
    alert('Попробуйте ещё раз.');
    registration = prompt('Желаете пройти регистрацию на сайте? (Да/Нет)');
}
alert('Круто!');

function askForLogin() {
    let login = prompt("Введите логин:");
    
    if (login === null) {
        alert("Отменено");
    } else if (login === "Админ") {
        askForPassword();
    } else if (login === "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}

function askForPassword() {
    let password = prompt("Введите пароль:");
    
    if (password === null) {
        alert("Отменено");
    } else if (password === "Я главный") {
        alert("Здравствуйте!");
    } else {
        alert("Неверный пароль");
    }
}

askForLogin();