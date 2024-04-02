//первая задача
function addClass() {
    let obj = {
        className: 'open menu'
    }
    let cls = document.getElementById('last_project').value;
    obj.className = obj.className.split(' ');
    if (obj.className.indexOf(cls) == -1) obj.className.push(cls); {
        obj.className = obj.className.join(' ');
    }
    let html = 'Результат: <b>' + obj.className + '</b>';
    document.getElementById('result2').innerHTML = html;
}
document.getElementById('qwerty').addEventListener('click', addClass);

//вторая задача
function camelize() {
    let str = document.getElementById('first_project').value;
    let words = str.split('-');
    let camelizedStr = words[0];

    for (let i = 1; i < words.length; i++) {
        camelizedStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let html = 'Результат: <b>' + camelizedStr + '</b>';
    document.getElementById('result').innerHTML = html;
}
document.getElementById('submit').addEventListener('click', camelize);

//третья задача
function className() {
    let obj = 'open menu'
    let cls = document.getElementById('third_project').value;
    let res = obj.replace(cls, '');
    let html = 'Результат: <b>' + res + '</b>';
    document.getElementById('result3').innerHTML = html;
}
document.getElementById('werty').addEventListener('click', className);


//четвёртая задача
function filterRangeInPlace() {
    let number = document.getElementById('numberElements').value;
    if (number != Math.floor(number)) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result4').innerHTML += html
        goto
    }
    else if (number < 0) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result4').innerHTML += html
        goto
    }
    let lineDiv = document.querySelector(".line1");
    lineDiv.innerHTML = "";
    for (let i = 0; i < number; i++) {
        let input = document.createElement("input");
        input.type = "text";
        lineDiv.appendChild(input);
    }
    lineDiv.appendChild(document.createElement("br"));
}
function deleteElementDiaposon() {
    let array = Array.from(document.querySelectorAll(".line1 input")).map(input => Number(input.value));
    let oneNumber = document.getElementById('oneNumber').value;
    if (oneNumber != Math.floor(oneNumber)) {
        let verification = "Некоректный ввод. Введите число."
        let html = 'Результат <b>' + verification;
        document.getElementById('result4').innerHTML += html;
        goto;
    }
    let twoNumber = document.getElementById('twoNumber').value;
    if (twoNumber != Math.floor(twoNumber)) {
        let verification = "Некоректный ввод. Введите число."
        let html = 'Результат <b>' + verification;
        document.getElementById('result4').innerHTML += html;
        goto;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= oneNumber && array[i] <= twoNumber) {
            let res = array.splice(i, 1)
            i--
            let html = 'Результат: <b>' + res + '</b>';
            document.getElementById('result4').innerHTML += html;
        }
    }

}

//пятая задача
function filter() {
    let number = document.getElementById('numberElement').value;
    if (number != Math.floor(number)) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result5').innerHTML += html
        goto
    }
    else if (number < 0) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result5').innerHTML += html
        goto
    }
    let lineDiv = document.querySelector(".line2");
    lineDiv.innerHTML = "";
    for (let i = 0; i < number; i++) {
        let input = document.createElement("input");
        input.type = "text";
        lineDiv.appendChild(input);
    }
    lineDiv.appendChild(document.createElement("br"));
}
function numberOutputDiaposon() {
    let array = Array.from(document.querySelectorAll(".line2 input")).map(input => Number(input.value));
    let oneNumbers = document.getElementById('oneNumbers').value;
    if (oneNumbers != Math.floor(oneNumbers)) {
        let verification = "Некоректный ввод. Введите число."
        let html = 'Результат <b>' + verification;
        document.getElementById('result5').innerHTML += html;
        goto;
    }
    let twoNumbers = document.getElementById('twoNumbers').value;
    if (twoNumbers != Math.floor(twoNumbers)) {
        let verification = "Некоректный ввод. Введите число."
        let html = 'Результат <b>' + verification;
        document.getElementById('result5').innerHTML += html;
        goto;
    }
    let result = array.filter(function (elem) {
        if (elem >= oneNumbers && elem <= twoNumbers) {
            return true
        }
        else {
            return false
        }
    })

    let html = 'Результат: <b>' + result + '</b>';
    document.getElementById('result5').innerHTML += html;
}


//шестая задача
function dataArray() {
    let numbers = document.getElementById('numberOfElements').value;
    if (numbers != Math.floor(numbers)) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result6').innerHTML += html
        goto
    }
    else if (numbers < 0) {
        let verification = " Некоректный ввод. Введите целое число"
        let html = 'Результат<b>' + verification
        document.getElementById('result6').innerHTML += html
        goto
    }
    let lineDiv = document.querySelector(".line0");

    lineDiv.innerHTML = "";
    for (let i = 0; i < numbers; i++) {
        let input = document.createElement("input");
        input.type = "text";
        lineDiv.appendChild(input);
    }
    lineDiv.appendChild(document.createElement("br"));
}

function sortArray() {
    let countisNaN = 0;
    let array = Array.from(document.querySelectorAll(".line0 input")).map(input => Number(input.value));
    array.forEach(function (array) {
        if (isNaN(array)) {
            countisNaN++
        }
    });
    if (countisNaN == 0) {
        let sortedArray = array.sort((a, b) => b - a);
        let html = 'Результат: <b>' + sortedArray + '</b>';
        document.getElementById('result6').innerHTML += html;
    }
    else {
        document.getElementById('result6').innerHTML += 'Некоретный ввод. Вводите числа';
    }
}