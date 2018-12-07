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
	var adminMenu ={
		image_src:"https://myduolife.com/images/img-profile.png",
		fields:[
			{	
				id:"productList",
				class:"productList",
				name:"Список продуктов"
			},
			{
				id:"addProduct",
				class:"addProduct",
				name:"Добавить продукт"
			},
			{
				id:"createOrdersList",
				class:"createOrdersList",
				name:"Список заказов"
			}
		]
	};

	var signMenu ={
		image_src:"https://myduolife.com/images/img-profile.png",
		fields:[
			{	
				id:"login",
				class:"link",
				name:"Авторизоваться"
			},
			{
				id:"newUser",
				class:"link",
				name:"Создать пользователя"
			}
		]
	};

	var login = {
		form_class:"form_block",
		form_id:"form_login",
		head_text:"Авторизация",
		fields:[
			{
				for:"input_email",
				text:"Email address",
				type:"email",
				class:"form-control",
				id:"input_email",
				placeholder:"Email",
			},
			{
				for:"input_password",
				text:"Password",
				type:"password",
				class:"form-control",
				id:"input_password",
				placeholder:"Password",
			}
		],
		button_type:"submit",
		button_class:"btn btn-default",
		button_id:"signup_button",
		button_text:"Авторизоваться",
	};


	var newUser = {
		form_class:"form_block",
		form_id:"form_new_user",
		head_text:"Создать пользователя",
		fields:[
			{
				for:"input_email",
				text:"Email address",
				type:"email",
				class:"form-control",
				id:"input_email",
				placeholder:"Email",
			},
			{
				for:"input_password",
				text:"Password",
				type:"password",
				class:"form-control",
				id:"input_password",
				placeholder:"Password",
			}
		],
		button_type:"submit",
		button_class:"btn btn-default",
		button_id:"new_user_button",
		button_text:"Создать пользователя",
	};

	var addNewProductForm = {
		form_class:"form_block",
		form_id:"form_new_product",
		head_text:"Добавить продукт",
		fields:[
			{
				for:"input_name_product",
				text:"Название",
				type:"name",
				class:"form-control",
				id:"input_name_product",
				placeholder:"Название продукта",			
			},
			{
				for:"input_price_product",
				text:"Цена",
				type:"price",
				class:"form-control",
				id:"input_price_product",
				placeholder:"Цена продукта",
			}
		],
		button_type:"submit",
		button_class:"btn btn-default",
		button_id:"new_product_button",
		button_text:"Создать продукт",

	}
	
	var topBlock = {
		img_login:"img_login",
		img_new_user:"img_new_user",
	}


	function renderMenu(menuObj){
		var source = $("#menu-template").html();
		var template = Handlebars.compile(source);
		var context = menuObj;
		$(".links_block").html(template(context));
	}

	function renderAuth(formObj){
		var source = $("#form-template").html();
		var template = Handlebars.compile(source);
		var context = formObj;
		$(".main_content_block").html(template(context));
	}

	function topRow(obj){
		var source = $("#top-block").html();
		var template = Handlebars.compile(source);
		var context = obj;
		$(".top_menu_block").html(template(context));
	}

	function addNewProduct(obj){
		var source = $("#add-product-template").html();
		var template = Handlebars.compile(source);
		var context = obj;
		$(".main_content_block").html(template(context));
	}

	function callLoginForm(e){
		$.ajax({
			method:"POST",
			url:"http://localhost:3000/user/signup",
			data:{
				email:$("#input_email").val(),
				password:$("#input_password").val(),
			},
			success: function(r){
				alert(r.message);
				$.ajax({
					method:"POST",
					url:"http://localhost:3000/user/login",
					data:{
						email:$("#input_email").val(),
						password:$("#input_password").val(),
					},
					success:function(r){
						token = r.token;
						renderMenu(adminMenu);
						$(".main_content_block").html("");
					}
				})
			},
			error:function(q,w,e){
 				alert(e);
			}
		})
	}

	function addNewUser(){
		$.ajax({
			method:"POST",
			url:"http://localhost:3000/user/login",
			data:{
				email:$("#input_email").val(),
				password:$("#input_password").val(),
			},
			success:function(r){
				token = r.token;
				renderMenu(adminMenu);
				$(".main_content_block").html("");	
			}
		})
	}

	function listOfProducts(){
		$.ajax({
			method:"GET",
			url:"http://localhost:3000/products",
			success:function(r){
				$(".main_content_block").html("");
				var source = $("#product-block").html();
				var template = Handlebars.compile(source);
				var context = r.products;
				$(".main_content_block").append(template(context));
			}
		})
	}

	function listOfOrders(){
		console.log("hello");
		$.ajax({
			method:"GET",
			url:"http://localhost:3000/orders",
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			success:function(r){
				$(".main_content_block").html("");
				var source = $("#table-template").html();
				var template = Handlebars.compile(source);
				var context = r.orders;
				console.log(r.orders);
				$(".main_content_block").append(template(context));
			}
		})
	}


	renderMenu(signMenu);
	topRow(topBlock);


	$(".links_block").on("click","#login", function(e){
		renderAuth(login);
	});

	$(".links_block").on("click","#newUser", function(e){
		renderAuth(newUser);
	})

	$(".top_menu_block").on("click","#img_login", function(e){
		renderAuth(login);
		renderMenu(signMenu);
	})
	$(".top_menu_block").on("click","#img_new_user", function(e){
		renderAuth(newUser);
		renderMenu(signMenu);
	})


	$(".main_content_block").on("click", "#new_user_button", function(e){
		e.preventDefault();
		callLoginForm();
	});

	$(".main_content_block").on("click", "#signup_button", function(e){
		e.preventDefault();
		addNewUser();
	})


	$(".links_block").on("click","#createOrdersList", function(e){
		e.preventDefault();
		listOfOrders();
	})

	$(".links_block").on("click","#addProduct", function(e){
		e.preventDefault();
		addNewProduct(addNewProductForm);

	});

	$(".links_block").on("click","#productList", function(e){
		e.preventDefault();
		listOfProducts();
	})


	$(".main_content_block").on("click", "#new_product_button", function(e){
		e.preventDefault();
		if ($("#productImage").prop("files").length){
			var formData = new FormData();
			formData.append("productimage", $("#productImage").prop("files")[0]);
			formData.append("name", $("#input_name_product").val());
			formData.append("price", $("#input_price_product").val());
		}

		$.ajax({
			method:"POST",
			url:"http://localhost:3000/products",
			data:formData,
			processData: false,
			contentType: false,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			success:function(r){
				alert:(r.message);
			},
			error:function(q,w,e){
				alert(e);
			}
		})
	})
	
	

	$(".main_content_block").on("click", ".change", function(e){
		e.preventDefault();
		var i = e.target.dataset.id;
		$.ajax({
			method:"GET",
			url:"http://localhost:3000/products/"+e.target.dataset.id,
			success:function(r){
				$(".popup_block").html("");
				var source = $("#popup-block").html();
				var template = Handlebars.compile(source);
				var context = r.product;
				console.log(r.product);
				$(".popup_block").append(template(context));
				$.fancybox.open({
					src:"#"+i,
				})
			},		
		})
	})

	$("body").on("click", ".popup_button", function(e){
		e.preventDefault();
		var formData = new FormData();
		formData.append("productimage", $("#inputFile").prop("files")[0]);
		formData.append("name", $(".name_input").val());
		formData.append("price", $(".price_input").val());
		console.log(e.target.dataset.id);
		$.ajax({
			method:"PATCH",
			url:"http://localhost:3000/products/"+e.target.dataset.id,
			data:formData,
			processData: false,
			contentType: false,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			success:function(r){
				listOfProducts();
				$.fancybox.close();
			}
		})
	})

	$(".main_content_block").on("click", ".delete", function(e){
		e.preventDefault();
		$.ajax({
			method:"DELETE",
			url:"http://localhost:3000/products/"+e.target.dataset.id,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			success:function(r){
				listOfProducts();
			}
		})
	})

	$(".main_content_block").on("click", ".order_product", function(e){
		e.preventDefault();
		var i = e.target.dataset.id;
		$.ajax({
			method:"POST",
			url:"http://localhost:3000/orders",
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			data:{
				productId:e.target.dataset.id,
				quantity:$(e.target).siblings("input").val(),
			},
			success:function(r){
				alert("Заказ успешно добавлен!");
			}	
		})
	})

	$(".main_content_block").on("click", ".delete_order", function(e){
		e.preventDefault();
		$.ajax({
			method:"DELETE",
			url:"http://localhost:3000/orders/"+e.target.dataset.id,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Authorization", "token "+token);
			},
			success:function(r){
				listOfOrders();
			}
		})
	})



	



});




