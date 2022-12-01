var FirstNumber, SecondNumber, Operation;

window.onload = () => {
	const arr = [[1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], ['C', 0, '/', '=']];
	let htmlContent = '<tr><td colspan="4"><label for="first"></label><input type="text" id="result" /></td></tr>';

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];
		let tr = ``;

		for (let j = 0; j < str.length; j++)
			tr += `<td><button type="button" onclick="GetInput('${str[j]}')">${str[j]}</button></td>`;

		htmlContent += `<tr>${tr}</tr>`;
	}

	document.getElementById('table').innerHTML = htmlContent;
}

function CalculateResult(First, Operation, Second) {
	switch (Operation) {
		case '+':
			return First + Second;
		case '-':
			return First - Second;
		case '*':
			return First * Second;
		case '/':
			if (Second != 0)
				return First / Second;
			return "Dividing by zero!";
	}
}

function GetInput(val) {
	result = document.getElementById('result');

	switch (val) {
		case '=':
			result.value = eval(document.getElementById('result').value);
			/* document.getElementById('result').value = CalculateResult(parseInt(FirstNumber), Operation, parseInt(document.getElementById('result').value));
			FirstNumber = "";
			Operation = ""; */
			break;
		case 'C':
			result.value = "";
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			if (!"+-/*".includes(result.value[result.value.length - 1]))
				result.value += val;
			else
				result.value = result.value.slice(0, -1) + val;
			break;
		default:
			result.value += val;
			break;
	}
}