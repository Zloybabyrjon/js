function createMatrix() {
	let rows = document.getElementById("rows").value;
	if (rows != Math.floor(rows)) {
		let verification = "Некоректный ввод. Введите число."
		let html = 'Результат <b>' + verification;
		document.getElementById('result').innerHTML += html;
		goto;
	}
	let cols = document.getElementById("cols").value;
	if (cols != Math.floor(cols)) {
		let verificationCols = "Некоректный ввод. Введите число."
		let html = 'Результат <b>' + verificationCols;
		document.getElementById('result2').innerHTML += html;
		goto;
	}

	let matrixInput = document.getElementById("matrixInput");
	matrixInput.innerHTML = "";

	if (rows != cols || cols != rows) {
		let verification = "Введена не квадратная матрица."
		let html = 'Результат <b>' + verification;
		document.getElementById('result').innerHTML += html;
		goto;
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			let input = document.createElement("input");
			input.type = "text";
			input.id = "matrix_" + i + "_" + j;
			matrixInput.appendChild(input);
		}
		matrixInput.appendChild(document.createElement("br"));
	}
}

function getMatrix() {

	let mat = [];
	let rows = document.getElementById("rows").value;
	let cols = document.getElementById("cols").value;

	let matInput = document.getElementById("matInput");

	let matrixText = "";

	for (let i = 0; i < rows; i++) {
		mat[i] = [];
		for (let j = 0; j < cols; j++) {
			let input = document.getElementById("matrix_" + i + "_" + j);
			mat[i][j] = input.value;
			matrixText += input.value + " ";
		}
		matrixText += "<br>";
	}

	matInput.innerHTML = matrixText;

	let N = mat.length
	// sumd1 и sumd2 сумма двух диагоналей
	let sumd1 = 0, sumd2 = 0;
	for (let i = 0; i < N; i++) {
		// (i, i) диагональ верхего левого и нижнего правого угла
		// (i, N - i - 1) диагональ верхего правого и нижнего левого угла
		sumd1 = sumd1 + mat[i][i];
		sumd2 = sumd2 + mat[i][N - 1 - i];
	}
	// если две диагонали не равны значит это не магический квадрат
	if (sumd1 != sumd2) {
		let no = "Не является магическим квадратом"
		let html = 'Результат <b>' + no;
		document.getElementById('result').innerHTML = html;
		return false;
	}

	for (let i = 0; i < N; i++) {
		let colSum = 0;
		let rowSum = 0;
		for (var j = 0; j < N; j++) {
			rowSum = rowSum + mat[i][j]; //Сумма элементов строки
			colSum = colSum + mat[j][i]; //Сумма элементов колонки
		}
		if (rowSum != colSum || colSum != sumd1) {
			let no = "Не является магическим квадратом"
			let html = 'Результат <b>' + no;
			document.getElementById('result').innerHTML = html;
			return false;
		}
	}
	if (N) {
		let yes = "Является магическим квадратом"
		let html = 'Результат <b>' + yes;
		document.getElementById('result').innerHTML += html;
	}

}
/*Вводить строки и столбцы в окне браузера.
Выводить матрицу в окне браузера через write(если не получится, то ввести через консоль).
Выводить в окно браузера является ли матрица магическим квадратом
Не нужно перекидывать весь код в HTML, нужно вызвать функцию*/