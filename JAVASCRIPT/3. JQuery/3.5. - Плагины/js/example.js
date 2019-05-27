
$("#input").flatpickr({
	mode:"range",
	dateFormat: "d-m-Y",
	onChange: function(selectedDates, dateStr, instance) {
		if(selectedDates.length > 1){
			console.log((selectedDates[1].getTime() - selectedDates[0].getTime())/1000/60/60/24 );
		}
    },
});

$(document).ready(function(){

	$('.sliderBox').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		centerMode: true,
  		focusOnSelect: true
	});




	$("[data-fancybox]").fancybox({
		src:"https://www.highreshdwallpapers.com/wp-content/uploads/2013/12/Snow-Tiger.jpg"
	});



	var ctx = $("#myChart");
	var myChart = new Chart(ctx, {
    	type: 'line',
    	data: {
    	    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    	    datasets: [{
    	        label: '# of Votes',
    	        data: [12, 19, 3, 5, 2, 3],
    	        backgroundColor: [
    	            'rgba(255, 99, 132, 0)',
    	        ],
    	        borderColor: [
    	            'rgba(255,99,132,1)',
    	        ],
    	        borderWidth: 1
    	    },
    	    {
    	        label: '# of Votes',
    	        data: [12, 25, 2, 7, 1, 5],
    	        backgroundColor: [
    	            'rgba(255, 99, 132, 0)',
    	        ],
    	        borderColor: [
    	            'rgba(0,47,78,1)',
    	        ],
    	        borderWidth: 1
    	    }
    	]}
	});

    new WOW().init();




});