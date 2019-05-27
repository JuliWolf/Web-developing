//Подготовка объектов для меню при авторизации (adminMenu), при загрузке страницы (signMenu)
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
var topBlock = {
	img_login:"img_login",
	img_new_user:"img_new_user",
}
//Подготовка формы для авторизации(login), для создания нового пользователя(newUser)
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
//Подготовка формы для добавления нового продукта
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

