function pow(base, exp) {
	var result = 1;
	for (var i = 0; i < exp; i++) {
		result *= base;
	}

	return result;
}

var base = prompt('Введите базовое число');
var exp = prompt('Введите базовое число');

console.log( pow(base, exp) );
