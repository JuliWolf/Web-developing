// function onPlayerStateChange(event) {
//     if(event.data === 0) {
        promise
            .then(
                result => {
                    video.classList.add("playerTransformed");
                    setTimeout(changeStyle,4000);
                },
                error => {
                    alert("Rejected: " + error);
                }
            )
            .then(
                result => {
                    secondPage.classList.add('changeOpacity');
                },
                error => {
                    alert('Не удалось загрузить второй экран')
                }
            )
            .then(
                result => {
                    headerImg.classList.add('changeHeaderText');
                    bottomPlace.classList.add('changeOpacity');
                    Array.from(textImages.children).forEach(function(q){q.classList.add('changeOpacity')});
                    Array.from(searchImg).forEach(function(q){q.classList.add('changeOpacity')});
                }
            )
            .then(
                result => {
                    setTimeout(function(){headerImg.classList.remove('changeHeaderText')}, 5000);
                },
                error => {
                    console.log('Изображение не работает');
                }
            );

//     }
// }
