function calc() {
    let calculator = {
        oneNumbers,
        twoNumbers,
        sum() {
            let result = Number(this.oneNumbers) + Number(this.twoNumbers);
            if (isNaN(result)) {
                let verification = " Некоректный ввод. Введите число"
                let html = 'Результат <b>' + verification
                document.getElementById('result').innerHTML += html
                goto
            }
            let html = "Результат сложения: <b>" + result + '<br>';
            document.getElementById('result').innerHTML = html;

        },
        mul() {
            let result = this.oneNumbers * this.twoNumbers;
            if (isNaN(result)) {
                let verification = " Некоректный ввод. Введите число"
                let html = 'Результат <b>' + verification
                document.getElementById('result').innerHTML += html
                goto
            }
            let html = "Результат умножения: <b>" + result;
            document.getElementById('result').innerHTML += html;
        },
        readValues() {
            this.oneNumbers = document.getElementById('oneNumbers').value;
            this.twoNumbers = document.getElementById('twoNumbers').value;
        }
    };

    calculator.readValues();
    calculator.sum();
    calculator.mul();

}
document.getElementById('sabmit').addEventListener('click', calc);

function countingExample() {
    let summator = {
        sum() {
            let result = Number(this.oneNumbers) + Number(this.twoNumbers);
            if (isNaN(result)) {
                let verification = " Некоректный ввод. Введите число"
                let html = 'Результат <b>' + verification
                document.getElementById('result2').innerHTML += html
                goto
            }
            let html = "Результат сложения: <b>" + result + '<br>';
            document.getElementById('result2').innerHTML = html;
        },
        run() {
            this.oneNumbers = document.getElementById('oneNumber').value

            this.twoNumbers = document.getElementById('twoNumber').value

        }
    };
    summator.run()
    summator.sum()
}
document.getElementById('sambit').addEventListener('click', countingExample);




function storageData() {
    document.getElementById('result3').innerHTML = ' '
    let adder = {
        storeValue() {
            this.value = this.startingValue
            this.startingValue = document.getElementById('values').value;
            if (isNaN(this.startingValue)) {
                let verification = " Некоректный ввод. Введите число"
                let html = 'Результат <b>' + verification
                document.getElementById('result3').innerHTML += html
                goto
            }
        },
        addInput() {
            this.number = document.getElementById('number').value
            if (isNaN(this.number)) {
                let verification = " Некоректный ввод. Введите число"
                let html = 'Результат <b>' + verification
                document.getElementById('result3').innerHTML += html
                goto
            }
            this.result = Number(this.startingValue) + Number(this.number);
        },
        showValue() {
            this.addInput();
            document.getElementById('number').value = " ";
            let html = 'Результат <b>' + this.result
            document.getElementById('result3').innerHTML += html


        }
    }
    adder.storeValue()
    adder.addInput()
    adder.showValue()
}
document.getElementById('qwerty').addEventListener('click', storageData);






/*function calculator() {
    let calc =
    {
        mul,
        sum,
    }

    calc.oneNumbers = document.getElementById('oneNumbers').value
    if (isNaN(calc.oneNumbers)) {
        let verification = " Некоректный ввод. Введите число"
        let html = 'Результат<b>' + verification
        document.getElementById('result').innerHTML += html
        goto
    }

    calc.twoNumbers = document.getElementById('twoNumbers').value
    if (isNaN(calc.oneNumbers)) {
        let verification = " Некоректный ввод. Введите число"
        let html = 'Результат<b>' + verification
        document.getElementById('result').innerHTML += html
        goto
    }

    let operation = document.getElementById('operation').value;
    if (operation == "+") {
        calc.sum = Number(calc.oneNumbers) + Number(calc.twoNumbers);
        let html = "Результат: <b>" + calc.sum;
        document.getElementById('result').innerHTML += html;
    }
    else if (operation == '*') {
        calc.mul = calc.oneNumbers * calc.twoNumbers;
        let html = "Результат: <b>" + calc.mul;
        document.getElementById('result').innerHTML += html;

    }
}
document.getElementById('sabmit').addEventListener('click', calculator);
*/
