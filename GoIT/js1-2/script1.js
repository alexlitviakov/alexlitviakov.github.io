function pow(base, exp) {

var b = base;

for (var i = 1; i < exp; i++) {

b *= base;

}

return b;

}

var base = prompt('Введите базовое число');

var exp = prompt('Введите степень, в которую возводить базовое число');

console.log(pow (base,exp));

