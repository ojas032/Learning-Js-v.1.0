var score,roundscore,activeplayer;
score=[0,0];
roundscore=0;
activeplayer=0;

var init=function(str){
    document.getElementById(str).textContent='0';
}

init('score-0');
init('score-1');
init('current-1');
init('current-0');


document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    if(dice!==1){
    var score=document.querySelector('#current-'+activeplayer).textContent;
    var p=parseInt(score);
    p+=dice;
    document.querySelector('#current-'+activeplayer).textContent=p;
    }
    else{
        activeplayer+=1;
        activeplayer%=2;
        console.log(activeplayer);
        init('current-1');
        init('current-0');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }

});




