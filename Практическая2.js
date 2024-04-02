function showNumbersSpace() {
    let str = prompt('Введите строку')
    if (str) {
        let spaceCount = (str.split(" ").length - 1);
        alert(spaceCount)
    }
    else {
        alert('Строка пустая')
    }
}

function ucFirst() {
    let str = prompt('Введите строку')
    let result
    result = str[0].toUpperCase() + str.slice(1);
    alert(result)
}

function checkSpam() {
    let str = prompt('Введите строку')
    alert(str.includes("viagra" || "XXX"))

}

function trancate() {                               //input это prompt, 
    let str = prompt('Введите строку')
    let maxlength = prompt('Введите размер строки')
    if (str.length > maxlength) {
        alert(str.slice(0, maxlength) + '...');

    }
}
//прокинуть импут к каждой функции и убрать кейсы

let choice = prompt('Выберите программу')

switch (choice) {
    case "1":
        alert("Программа считает пробелы")
        showNumbersSpace();
        break;
    case "2":
        alert("Делает первую букву заглавной")
        ucFirst();
        break;
    case "3":
        alert("Возвращает true, если программа содержит viagra и XXX")
        checkSpam();
        break;
    case "4":
        alert("Проверяет длинну строки")
        trancate();
        break;
    default:
        alert('Некоректный ввод.')
}

