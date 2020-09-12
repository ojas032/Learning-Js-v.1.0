var score,roundscore,activeplayer;

var init=function(str){
    document.getElementById(str).textContent='0';
}

var gameInit=function(){
    score=[0,0];
    roundscore=0;
    activeplayer=0;
    init('score-0');
    init('score-1');
    init('current-1');
    init('current-0');

    document.querySelector('#name-0').textContent='Player-1';
    document.querySelector('#name-1').textContent='Player-2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}

gameInit();






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
    roundscore=p;
    document.querySelector('#current-'+activeplayer).textContent=p;
    }
    else{
       nextPlayer();

    }
});

function nextPlayer(){
    activeplayer+=1;
    activeplayer%=2;
    init('current-1');
    init('current-0');
    roundscore=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}




document.querySelector('.btn-new').addEventListener('click',function(){
    gameInit();
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    score[activeplayer]+=roundscore;

    document.querySelector('#score-'+activeplayer).textContent=score[activeplayer];
    if(score[activeplayer]>20){
        document.querySelector('.dice').style.display='none';
        document.querySelector('#name-'+activeplayer).textContent='Winner!';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    }
    else{
        nextPlayer();
        //dded 
        //dded
    }


});





