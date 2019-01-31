	var video = document.getElementById('video'),
		secondPage = document.getElementsByClassName('secondPage')[0],
		height = window.outerHeight,
		headerImg = document.getElementById('headerText'),
		bottomPlace = document.getElementById('bottomPlace');

    var player;
    console.log(bottomPlace);



    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
          height: '920',
          width: '1600',
          videoId: 'tqLjS0bVFYM',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {        
        if(event.data === 0) {            
   			video.classList.add("playerTransformed");
   			setTimeout(changeStyle,4000);
   			secondPage.classList.add('changeOpacity');
   			checkState();
        }
    }
    function changeStyle(){
    	video.style.display = 'none'
    }

    if(getComputedStyle(secondPage).opacity == 1){
    	headerImg.classList.add('changeHeaderText');
    	bottomPlace.classList.add('changeOpacity');
    }



    



