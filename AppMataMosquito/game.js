var gameHeight = 0;
var gameWidth = 0;

var healths = 3;

var timeToWin = 50;

function ChangeHeight ( ) {
    gameHeight = window.innerHeight;
    gameWidth  = window.innerWidth;

    console.log(gameWidth, gameHeight);
}

ChangeHeight();

var cronometro = setInterval(function ( ) {
    timeToWin -= 1;

    if (timeToWin < 0) {
        clearInterval(cronometro);
        window.location.href = 'victory.html';
    }else{
        document.getElementById('cronometro').innerHTML = timeToWin;
    }
}, 1000);

function RandomPosition ( ) {
    //remove older mosquito
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (healths < 1) {
            window.location.href = 'end_game.html';
        }else{
            document.getElementById('l' + healths).src = 'imagens/imagens/coracao_vazio.png';
            healths--;
        }
    }

    var positionX = (Math.random() * gameWidth) - 90;
    var positionY = (Math.random() * gameHeight) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY);

    //create a html element

    var mosquito = document.createElement('img');

    mosquito.src = 'imagens/imagens/mosca.png';
    mosquito.className = HeightRandom() + ' ' + RandomSide();
    
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function HeightRandom ( ) {
    var classMosquito = Math.floor(Math.random() * 3);
    
    switch (classMosquito) {
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}

function RandomSide ( ) {
    var classMosquito = Math.floor(Math.random() * 2);
    
    switch (classMosquito) {
        case 0:
            return "sideA";
        case 1:
            return "sideB";
    }
}