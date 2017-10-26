var names = [];

for (var i = 0; i < 5; i++) {
names[i] = prompt('введите ваше имя', '');
}

var majorName = prompt('введите главное имя', '');

var userName = names.includes(majorName);

	if (userName == true) {
		alert(majorName + ', добро пожаловать!')
	} else {
		alert('Такого имени нет в базе. Введите имя снова!')
	}


