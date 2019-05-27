$(document).ready(function(){

	var $form = $("form");
	
	var $fileInput = $("#user_photo");
	var fileReader = new FileReader();
	var idName = 1; 
	

	var btnInt = $("#btn_add_int");
	var interest = [];
	var userInterest = $("#user_interest");
	var boxInterest = $(".box_interest");


	function addUser(r){
	
		var $wrapper = $(".wrapper");

		var $mainBlock = $("<div></div>");
		$mainBlock.addClass("row");
		$mainBlock.addClass("row_wrapper");
		$mainBlock.attr("userId", idName);

		var $innerBlock = $("<div></div>");
		$innerBlock.addClass("col-md-8");
	
		var $userName = $("<h2></h2>");
		var $userStatus = $("<h6></h6>");
		var $userAbout = $("<p></p>"); 
		var $wrapInterest = $("<div></div>");
	
	
		$wrapper.prepend($mainBlock);
		$mainBlock.append($innerBlock);
		$innerBlock.append($userName);
		$innerBlock.append($userStatus);
		$innerBlock.append($userAbout);
		$innerBlock.append($wrapInterest);
	
		$wrapInterest.addClass("box_interest");
		$userName.append(r.user_name);
		$userStatus.append(r.user_status);
		$userAbout.append(r.user_about);

		if(interest.length !== 0){
			interest.forEach(function(q){
				$wrapInterest.append($("<span>"+q+"</span>"));
			})
		}

		var $elImage = $("<img>");
		var $blockImage = $("<div></div>");
		$elImage.addClass("img-circle");
		$blockImage.addClass("col-md-4")
		$mainBlock.prepend($blockImage);
		$blockImage.append($elImage);


		fileReader.onload = function(){
			$elImage.attr("src", fileReader.result);
		}

		if(!$elImage.attr("src")){
			$elImage.attr("src", "http://cliparts.co/cliparts/8iz/rjn/8izrjna8T.png");
		}


		idName++;
		interest=[];
	}
	
	$form.on("submit", function(e){
		e.preventDefault();
		var result = {};
		if($fileInput[0].files[0]){
			fileReader.readAsDataURL($fileInput[0].files[0]);
		}
		for(var i = 0; i<e.target.elements.length; i++){
			if(e.target.elements[i].value !== ""){
				result[e.target.elements[i].name] = e.target.elements[i].value;
			}else{
				if(e.target.elements[i].name !== ""){
					$(e.target.elements[i]).addClass("warning");
				}
			}
			e.target.elements[i].value = "";
		}
		addUser(result);
		
		boxInterest.empty();
	})
	$("input").on("input", function(e){
		$(e.target).removeClass("warning");
	})




	btnInt.on("click", function(g){
		g.preventDefault();
		interest.push(userInterest.val());

		boxInterest.empty();
		interest.forEach(function(q, o){
			boxInterest.prepend($("<span>"+q+"<span id=\"dataIndex_"+o+"\">&#10060;</span></span>"));
			$("#dataIndex_"+o).on("click", function(e){
				var that_count = o;
				console.log(that_count)
				interest.splice(that_count,1);

				$(e.target).parent().remove();
			})
		})

		userInterest.val("");
	})

})

