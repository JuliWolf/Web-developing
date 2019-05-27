//Когда в "fileInput" будет загружен файл, зарегестрируется событие "change"
//Код в CallBack функции обработчика событий запустит загруженный файл на чтение с помощью объекта "fileReader"
//Когда объект "fileReader" прочитает загруженный файл в качестве 
//DataURL(бинарное представление данных, которое можно использовать в качестве изображения как ссылку)
//DataURL запишется в свойство "result" объекта "fileReader"
//и зарегестрируется событие "onload" у объекта "fileReader"
//и выполнится метод "onload" у объекта "fileReader"



// var fileInput = document.getElementById("file_input_element");
// var block = document.getElementById("block"); 
// var fileReader = new FileReader();

// fileReader.onload = function(){
// 	var elImage = document.createElement('img');
// 	elImage.src = fileReader.result;
// 	block.appendChild(elImage);
// }

// fileInput.addEventListener("change", function(){
// 	fileReader.readAsDataURL(fileInput.files[0])
// })



//Модуль загрузки изображения

// var fileInput = document.getElementById("file_input_element");
// var labelBlock = document.getElementById("label_block");
// var fileReader = new FileReader();


// fileReader.onload = function(){
// 	labelBlock.style.backgroundImage = "url("+fileReader.result+")";
// }

// fileInput.addEventListener("change", function(){
// 	fileReader.readAsDataURL(fileInput.files[0])
// })