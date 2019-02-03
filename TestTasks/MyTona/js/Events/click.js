box.addEventListener('click', function(e){
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    console.log('X - '+x);
    console.log('Y - '+y);
    if((x >= 210 && x <= 240) &&(y >= 110 && y <= 320)){
        var obj = ballerina;
        var text = ballerinaText;
    }else if((x >= 190 && x <= 310) &&(y >= 240 && y <= 260)){
        var obj = perfume;
        var text = perfumeText;
    }else if((x >= 43 && x <= 109) &&(y >= 1 && y <= 19)){
        var obj = mirror;
        var text = mirrorText;
    }else if((x >= 85 && x <= 190) &&(y >= 260 && y <= 360)){
        var obj = comb;
        var text = combText;
    }
    obj.classList.add('illuminate');
    setTimeout(function(){obj.classList.add('hideObject');}, 5000);
    text.classList.add('hideObject');
});
