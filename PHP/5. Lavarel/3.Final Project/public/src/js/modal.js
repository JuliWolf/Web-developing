function modalOpen(e){
    e.preventDefault();
    var background = document.createElement('div');
    background.className = 'modal-background';
    var width = window.innerWidth;
    var height = window.innerHeight;
    background.style.width = width + 'px';
    background.style.height = height + 'px';
    document.body.appendChild(background);

    var modal = document.getElementsByClassName('modal')[0];
    setTimeout(function(){
        modal.style.display = 'block';
        modal.style.top = height/2 - modal.offsetHeight / 2 + 'px';
    }, 10);
}

function modalClose(e){
    e.preventDefault();
    var modal = document.getElementsByClassName('modal')[0];
    while(modal.firstElementChild.tagName != 'BUTTON'){
        modal.firstElementChild.remove();
    }
    modal.style.top = '10%';
    modal.style.display = 'none';
    $('.modal-background')[0].remove();
}