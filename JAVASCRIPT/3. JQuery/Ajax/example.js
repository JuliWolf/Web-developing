// 1. Что обозначает AJAX
// 2. Для чего используется AJAX
// 3. Как использовать
// 4. Синхронный и асинхронный запрос


// new XmlHttpRequest()//для всех браузеров(explorer c 7й версии)

// new ActiveXObjext("Miscrosoft.XMLHTTP")//для старых версий Explorer до 6го
// new ActiveXObjext("Msxm12.XMLHTTP")//для 6й версии Explorer

//Универсальная функция, которая будет работать для 99% сслучаев
function getXmlHttpRequest(){
	if(window.XmlHttpRequest){
		try{return new XmlHttpRequest();}
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
	req = getXmlHttpRequest();
	console.log(fileName)
	req.onreadystatechange = function(){
		if(req.readyState === 4){
			console.log(req.readyState)
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



