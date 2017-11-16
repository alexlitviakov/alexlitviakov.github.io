var base = prompt('Введите базовое число');
var exp = prompt('Введите экспоненту');

function pow(base, exp) {

if (exp == 0) {

return 1;
} else if(exp < 0) {

return 1 / base * pow(base, exp + 1);

}
return base * pow(base, exp - 1);

}

//console.log(pow(2, 3));

console.log(pow(base, exp) );
