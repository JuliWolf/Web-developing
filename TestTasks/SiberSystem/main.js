var td_count = 10;
var t;


function createContent(){
	t = window.tbl;

	if(!t.rows.length){
		create(t.tBodies[0] || t, 4);
		create(t.createTHead(), 2);
		create(t.createTFoot(), 3);
	}


	function create(section, tr_count){
		for(var i = 0, tr; i < tr_count; i++){
			tr = section.insertRow(section.rows.length);

			for(var j = 0, td; j < td_count; j++){
				td = tr.insertCell(tr.cells.length);
				td.innerHTML = tr.cells.length;
				td.innerHTML += "<sup>" + section.rows.length + "</sup>";
			}
		}
	}
}