var score,roundscore,activeplayer;
score=[0,0];
roundscore=0;
activeplayer=0;

//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector('#current-'+activeplayer).textContent=dice;

document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    var score=document.querySelector('#current-'+activeplayer).textContent;
    score+=dice;
    document.querySelector('#current-'+activeplayer).textContent=score;

});




