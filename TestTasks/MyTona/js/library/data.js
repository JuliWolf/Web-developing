var video = document.getElementById('video'),
    secondPage = document.getElementsByClassName('secondPage')[0],
    height = window.outerHeight,
    headerImg = document.getElementById('headerText'),
    bottomPlace = document.getElementById('bottomPlace'),
    textImages = document.getElementsByClassName('text')[0],
    searchImg = document.getElementsByClassName('findImg'),
    ballerina = document.getElementById('ballerina'),
    comb = document.getElementById('comb'),
    mirror = document.getElementById('mirror'),
    perfume = document.getElementById('perfume'),
    box = document.getElementsByClassName('images')[0],
    ballerinaText = document.getElementsByClassName('ballerina')[0],
    combText = document.getElementsByClassName('comb')[0],
    mirrorText = document.getElementsByClassName('mirror')[0],
    perfumeText = document.getElementsByClassName('perfume')[0];





var promise = new Promise((resolve, reject) =>{
    resolve("result");
    reject('error');
});