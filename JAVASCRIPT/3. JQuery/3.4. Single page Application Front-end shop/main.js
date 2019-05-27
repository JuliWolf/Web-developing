//HandleBars - библиотека для создания html шаблонов
//и использования внутри них переменных из js

//	<script src="handlebars-v4.0.12.js"></script> - подключение js библиотеки

// в теге "script" подготавливается html шаблон 
// в нем размечаются места, где необходимо отобразить данные в {{}}

// С помощью метода "ajax" выполняем запрос, и подготавливаем функцию для обработки ответа
// находим строковое представление шаблона в элементе "script" ("var source = ")
// метод объекта Handlebars.compile() принимает строковое представление шаблона 
// и возвращает функцию в замыкании которой находится скомпелированный шаблон
// Функция, которая возвращается, ожидает объект с переменными, которые используются в шаблоне



// $.ajax({
// 	method:"GET",
// 	url:"http://localhost:3000/products",
// 	success:function(r){
// 		var source = $("#entry-template").html();
// 		var template = Handlebars.compile(source);//возвращается функция
// 		console.log(template);
// 		var context = r.products[0];
// 		$("body").html(template(context));
// 	}
// })



// POST /products Вносит новый продукт тело: formData { name: String, price: Number, productImage: File } *

// $("#post_products").on("click", function(){
// 	$.ajax({
// 		method:"POST",
// 		url:"http://localhost:3000/products",
// 		success:function(r){
// 			var source = $("#entry-template").html();
// 			var template = Handlebars.compile(source);//возвращается функция
// 			var context = r.products[0];
// 			$(".button_block").html(template(context));
// 		}
// 	})
// })


// var reg = {
// 	fields: [
// 		{
// 			type: "text",
// 			class: "someClass",
// 			id: "SomeId",
// 			placeholder: "email",
// 		},
// 		{
// 			type: "password",
// 			class: "someClass_1",
// 			id: "SomeId_1",
// 			placeholder: "password",
// 		}
// 	],
// 	button_id: "reg_form_submit",
// }



//Пример создания объектов с помощью handlebar

// var login = {
// 	fields: [
// 		{
// 			type: "text",
// 			class: "someClass",
// 			id: "SomeId",
// 			placeholder: "email_1",
// 		},
// 		{
// 			type: "password",
// 			class: "someClass_1",
// 			id: "SomeId_1",
// 			placeholder: "password_1",
// 		},
// 				{
// 			type: "password",
// 			class: "someClass_1",
// 			id: "SomeId_1",
// 			placeholder: "password_1",
// 		},

// 				{
// 			type: "password",
// 			class: "someClass_1",
// 			id: "SomeId_1",
// 			placeholder: "password_1",
// 		},

// 				{
// 			type: "password",
// 			class: "someClass_1",
// 			id: "SomeId_1",
// 			placeholder: "password_1",
// 		},
// 	],
// 	button_id: "reg_form_submit",
// }


// function renderForm(formObj){
// 		var source = $("#form-template").html();
// 		var template = Handlebars.compile(source);
// 		var context = formObj
// 		$("#my_form_block").html(template(context));
// }



// $('#my_form_block').on('click', '#reg_form_submit', function(e){
// 	e.preventDefault();
// })
// renderForm(reg);



//Создать страницу пользователя(админ панель)
// Создать панель с функционалом для просмотра продуктов, удаления, изменения продуктов


$(document).ready(function(){

	var fileReader = new FileReader();
	var token;
	var mainContent = $(".main_content_block");
	var linksBlock = $(".links_block");
	var topMenu = $(".top_menu_block");
	var tableTemplate = $("#table-template");
	var popupBlock = $("#popup-block");
	var topBlock = $("#top-block");
	var productBlock = $("#product-block")
	var menuTemplate = $("#menu-template");
	var formTemplate = $("#form-template");
	var addProductTemplate = $("#add-product-template");
	var popupWrapper = $(".popup_block");

	constructor(signMenu, menuTemplate, linksBlock); //вызов функции для создания меню авторизации
	constructor(topBlock, topBlock, topMenu);//вызов функции для создания верхнего меню


	linksBlock.on("click","#login", function(e){
		constructor(login, formTemplate, mainContent);
	});

	linksBlock.on("click","#newUser", function(e){
		constructor(newUser, formTemplate, mainContent);
	})

	topBlock.on("click","#img_login", function(e){
		constructor(login, formTemplate, mainContent);
		constructor(signMenu, menuTemplate, linksBlock);
	})
	topBlock.on("click","#img_new_user", function(e){
		constructor(newUser, formTemplate, mainContent);
		constructor(signMenu, menuTemplate, linksBlock);
	})

	mainContent.on("click", "#new_user_button", function(e){
		e.preventDefault();
		request(false, "POST", "signup", function(r){alert(r.message);request(false, "POST", "login")});
	});

	mainContent.on("click", "#signup_button", function(e){
		e.preventDefault();
		request(false, "POST", "login", function(r){
					token = r.token;
					constructor(adminMenu, menuTemplate, linksBlock);
					mainContent.html("");	
				});
	})

	linksBlock.on("click","#createOrdersList", function(e){
		e.preventDefault();
		request(true, "GET", "orders");
	})

	linksBlock.on("click","#addProduct", function(e){
		e.preventDefault();
		constructor(addNewProductForm, addProductTemplate, mainContent);

	});

	linksBlock.on("click","#productList", function(e){
		e.preventDefault();
		request(false, "GET", "products", function(r){
			mainContent.html("");
			constructor(r.products, productBlock, mainContent);});
	})

	mainContent.on("click", ".delete", function(e){
		e.preventDefault();
		request(true, "DELETE", "products/"+e.target.dataset.id, function(r){request(false, "GET", "products");});
	})

	mainContent.on("click", ".delete_order", function(e){
		e.preventDefault();
		request(true, "DELETE", "orders/"+e.target.dataset.id, function(r){request(true, "GET", "orders");});
	})

	mainContent.on("click", "#new_product_button", function(e){
		e.preventDefault();
		request(true, "POST", "products", function(r){alert:(r.message);}, true, 
			$("#productImage"), $("#input_name_product"), $("#input_price_product"));
	})

	$("body").on("click", ".popup_button", function(e){
		e.preventDefault();
		request(true, "PATCH", "products/"+e.target.dataset.id,
			function(r){
				request(false, "GET", "products", function(r){
					mainContent.html("");
					constructor(r.products, productBlock, mainContent);});
				$.fancybox.close();
			}, true, $("#inputFile"), $(".name_input"), $(".price_input"));
	})

	mainContent.on("click", ".change", function(e){
		e.preventDefault();
		request(false, "GET", "products/"+e.target.dataset.id, function(r){
			popupWrapper.html("");
			constructor(r.product, popupBlock, popupWrapper);
			$.fancybox.open({
				src:"#"+e.target.dataset.id,
			})
		});
	})

	mainContent.on("click", ".order_product", function(e){
		e.preventDefault();
		request(true, "POST", "orders", e.target);
	})

	function constructor(obj, template, place){
		var source = $(template).html();
		var template = Handlebars.compile(source);
		var context = obj;
		$(place).html(template(context));
	}

	function request(key, method, url, success, formData, image, name, price){
		if ((key == false) && (method == "POST")){
			$.ajax({
				method:method,
				url:"http://localhost:3000/user/"+url,
				data:{
					email:$("#input_email").val(),
					password:$("#input_password").val(),
				},
				success: success
			})
		}else if ( (key == false) && (method == "GET")){
			$.ajax({
				method:method,
				url:"http://localhost:3000/"+url,
				success:success
			})
		}else if((key == true) && (method == "GET")){
			$.ajax({
				method:method,
				url:"http://localhost:3000/"+url,
				beforeSend: function(xhr){
					xhr.setRequestHeader("Authorization", "token "+token);
				},
				success:function(r){
					mainContent.html("");
					constructor(r.orders, tableTemplate, mainContent)
				}
			})
		}else if((key == true) && (method == "DELETE") ){
			$.ajax({
				method:method,
				url:"http://localhost:3000/"+url,
				beforeSend: function(xhr){
					xhr.setRequestHeader("Authorization", "token "+token);
				},
				success:success
			})
		}else if((key == true) && (formData == true)){
			var formData = new FormData();
			formData.append("productimage", image.prop("files")[0]);
			formData.append("name", name.val());
			formData.append("price", price.val());
			$.ajax({
				method:method,
				url:"http://localhost:3000/"+url,
				data:formData,
				processData: false,
				contentType: false,
				beforeSend: function(xhr){
					xhr.setRequestHeader("Authorization", "token "+token);
				},
				success:success
			})
		}else if((key == true) && (method == "POST")){
			$.ajax({
				method:method,
				url:"http://localhost:3000/"+url,
				beforeSend: function(xhr){
					xhr.setRequestHeader("Authorization", "token "+token);
				},
				data:{
					productId:success.dataset.id,
					quantity:$(success).siblings("input").val(),
				},
				success:function(r){
					alert("Заказ успешно добавлен!");
				}	
			})
		}
	} 


});




