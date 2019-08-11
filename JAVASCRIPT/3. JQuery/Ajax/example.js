// 1. Что обозначает AJAX
// 1. Для чего используется AJAX
// 3. Как использовать
// 4. Синхронный и асинхронный запрос


// new XmlHttpRequest()//для всех браузеров(explorer c 7й версии)

// new ActiveXObjext("Miscrosoft.XMLHTTP")//для старых версий Explorer до 6го
// new ActiveXObjext("Msxm12.XMLHTTP")//для 6й версии Explorer

//Универсальная функция, которая будет работать для 99% сслучаев


	function getXMLHttpRequest(){
		if(window.XMLHttpRequest){
			try{return new XMLHttpRequest();}
			catch(e){}
		}else if(window.ActiveXObject){
			try{return new ActiveXObjext("Msxm12.XMLHTTP");}
			catch(e){}
			try{return new ActiveXObjext("Miscrosoft.XMLHTTP");}
			catch(e){}
		}
		return null;
	}

/*---------------------------------------------------------------------------------------------------*/ 

	var req;
	
	function getText(fileName){
		req = getXMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4){
				if(req.status != 200){//Если не ошибка 200
					alert(req.status +":"+req.statusText) //вывести статус и описание
				}else {
					alert(req.responseText);
				}
			}
		};
		req.open("GET", fileName, true);
		req.send(null);
	}
	
	function getInfo(filename){
		req = getXMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState === 4){
				alert("Размер файла:\t " + req.getResponseHeader("Content-Length") 
					+ "\n" + "Файл изменен: \t" 
					+ req.getResponseHeader("Last-Modified"));
				alert(req.getAllResponseHeaders);	
				};
		}
		req.open("GET", fileName, true);
		req.send(null);
	}
	$(".getText").on("click", getText("hello.txt"));
	$(".getWrongText").on("click", getText("badfile.txt"));
	$(".getInfo").on("click", getText("hello.txt"));


