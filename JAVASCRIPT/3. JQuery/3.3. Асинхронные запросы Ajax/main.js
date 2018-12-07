//Запросы

//Http(Hyper Text Transform Protocol) -Это протокол прикладного уровня передачи данных

//Между клиентом и сервером передается ресурс, в обычной форме "запрос-ответ"

//Структура протокола
//Состоит из трех частей
// 1.Стартовая строка - определяет тип сообщения(обязательная часть)
// 2.Заголовки запроса - характеризует тело сообщения, параметры передачи и прочие сведения(обязательная часть)
// 3.Тело запроса - данные сообщения. Должно отделяться пустой строкой(может отсутсвовать)

// Пример:

// Запрос
// GET /wiki/страница HTTP/1.1
// Host: ru.wikipedia.org
// User-Agent: Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5
// Accept: text/html
// Connection: close
// (пустая строка) 

// Ответ
// HTTP/1.1 200 OK
// Date: Wed, 11 Feb 2009 11:20:59 GMT
// Server: Apache
// X-Powered-By: PHP/5.2.4-2ubuntu5wm1
// Last-Modified: Wed, 11 Feb 2009 11:20:59 GMT
// Content-Language: ru
// Content-Type: text/html; charset=utf-8
// Content-Length: 1234
// Connection: close
// (пустая строка)
// (запрошенная страница в HTML)

// Синхронные запросы - событий выполняются последовательно, 1 за другим
// Асинхронные запросы - выполняется сразу несколько событий, параллельно

// Пример создания асинхронного запроса, без перезагрузки страницы
// Чтобы создать запрос, необходимо использовать объект "XMLHttpRequest"
// метод объекта XMLHttpRequest.open() используется для подготовки запроса
// метод объекта XMLHttpRequest.send() используется для отправки запроса
// Событие onload сообщает, что запрос был завершен без ошибок 
// После удачного завершения, запросы содержат тело ответа на запрос в свойстве XMLHttpRequest.responseText


// var button = document.getElementsByClassName("button")[0];
// console.log(button);

// button.addEventListener("click",function(){	
// 	var xhr = new XMLHttpRequest();
	
// 	xhr.open("GET", "http://test-ajax.ru/query.php", true);
// 	xhr.send();
	
// 	xhr.onload = function(){
// 		console.log(xhr.responseText);	
// 	}
// })

//2 способа выводы данных с сервера на страницу

// 1. Находим элемент с классом "wrapper"
// Находим элемент с классом "button"
// Создаем обработчик события для отправки запроса и получения ответа от сервера
// Создаем функцию для обработки ответа 

// var button = document.getElementsByClassName("button")[0];
// var wrapper = document.getElementsByClassName("wrapper")[0];

// button.addEventListener("click", function(){	
// 	var xhr = new XMLHttpRequest();
	
// 	xhr.open("GET", "http://test-ajax.ru/query.php", true);
// 	xhr.send();
	
// 	xhr.onload = createUsers;
// })



//2. Находим элемент с классом "wrapper"
// Находим элемент с классом "button"
// Используем метод JQuery "ajax", которому передаем объект который конфигурирует запросы

// $(".button").on("click", function(){
// 	$.ajax({
// 		url:"http://test-ajax.ru/query.php",
// 		method:"GET",
// 		success:createUsers,
// 	})
// })


// function createUsers(users){
// 	if(this.responseText){
// 		var users = JSON.parse(this.responseText);
// 	}

// 	for(var i = 0; i<users.length; i++){
// 		wrapper.appendChild(document.createTextNode("name: "+users[i].name+" "));
// 		wrapper.appendChild(document.createTextNode("status: "+users[i].status+" "));
// 		wrapper.appendChild(document.createTextNode("about: "+users[i].about+" "));
// 	}
// }


// Пост-запросы
// Передача файлов через ajax
// 



$(".button").on("click", function(){
	$.ajax({
		url:"http://localhost:3000/products",
		method:"GET",
		success:function(r){
			for(var i = 0; i<r.products.length; i++){
				$(".wrapper").append("name: "+ r.products[i].name+" ");
				$(".wrapper").append("price: "+ r.products[i].price+" ");
				$(".wrapper").append("image: "+ r.products[i].productImage+" ");
			}
		}
	})
})

