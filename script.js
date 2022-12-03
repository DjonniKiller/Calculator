var str = "";

window.onload = () => {
	const arr = [[1, 2, 3, '+'], [4, 5, 6, '-'], [7, 8, 9, '*'], ['C', 0, "AC", '/'], ['=']];
	let htmlContent = '<tr><td colspan="4"><label for="first"></label><input type="text" id="result" oninput="CheckLength();" /></td></tr>';

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];
		let tr = ``;

		for (let j = 0; j < str.length; j++) {
			if ("+-/*AC".includes(str[j]))
				tr += `<td><button type="button" class="ActionButton" onclick="GetInput('${str[j]}')">${str[j]}</button></td>`;
			else if (str[j] === '=')
				tr += `<td colspan="4"><button type="button" class="equalButton" onclick="GetInput('${str[j]}')">${str[j]}</button></td>`;
			else
				tr += `<td><button type="button" onclick="GetInput('${str[j]}')">${str[j]}</button></td>`;
		}

		htmlContent += `<tr>${tr}</tr>`;
	}

	document.getElementById('table').innerHTML = htmlContent;
}

function CheckLength() {
	if (document.getElementById('result').value.length > 10) {
		document.getElementById('result').value = document.getElementById('result').value.slice(0, 10);
		return false;
	}
	return true;
}

function GetInput(val) {
	result = document.getElementById('result');

	if (CheckLength()) {
		switch (val) {
			case '=':
				if (str.includes("/0")) {
					alert("Dividing by zero!");
					str = "0";
				}
				else
					result.value = eval(str);
				break;
			case "AC":
				result.value = "";
				str = "";
				break;
			case 'C':
				str = str.slice(0, -1);
				result.value = result.value.slice(0, -1);
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				result.value = "";

				if (!"+-/*".includes(str[str.length - 1]))
					str += val;
				else
					str = str.slice(0, -1) + val;
				break;
			default:
				result.value += val;
				str += val;
				break;
		}
	}
}