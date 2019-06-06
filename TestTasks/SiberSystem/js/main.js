$('document').ready(function(){
	var wrapperWidth = $(".wrapper")[0].clientWidth,
		wrapperHeight = $(".wrapper")[0].clientHeight,
		cellHeight = 20,
		cellWidth = 40;

	createContent();

	function createContent(){
		var cellsCount = wrapperHeight/cellHeight;
		var td_count = wrapperWidth/cellWidth;
		var t = window.tbl;

		if(!t.rows.length){
			createTable(t.tBodies[0] || t, cellsCount, td_count);
		}
		changeCellsColor();
	}

	function createTable(section, tr_count, td_count){
		for(var i = 0, tr; i < tr_count; i++){
			tr = section.insertRow(section.rows.length);

			for(var j = 0, td; j < td_count; j++){
				td = tr.insertCell(tr.cells.length);
			}
		}
	}

	function createObjPos(){
		var obj = {};
		var childrenList = $(".wrapper").children();
		for(var i = 0; i < childrenList.length; i++){
			var elemObj = {};
			var elem = childrenList[i];
			elemObj.height = Math.ceil(elem.clientHeight/cellHeight);
			elemObj.width = Math.ceil(elem.clientWidth/cellWidth);
			elemObj.offsetRows = Math.ceil(elem.offsetTop/cellHeight);
			elemObj.offsetCols = Math.ceil(elem.offsetLeft/cellWidth);
			elemObj.color = elem.style.backgroundColor;
			obj[elem.className] = elemObj;
		}
		return obj;
	}

	function changeCellsColor(){
		var obj = createObjPos();
		for(var key in obj){
			var elem = obj[key];
			findCells(elem.offsetRows, elem.height, elem.offsetCols, elem.width, elem.color);
		}
	}

	function findCells(rStart, rLength, colStart, colLength, color){
		var tbl = $('#tbl');
		var trList = $('#tbl').find('tr');
		for(var row = rStart+1; row < rStart+rLength+1; row++){
			var trChild = trList[row].children;
			for(var col = colStart; col < colStart+colLength; col++){
				trChild[col].style.backgroundColor = color;
			}
		}
	}
});



