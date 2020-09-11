var score,roundscore,activeplayer,dice;
score=[0,0];
roundscore=0;
activeplayer=0;

dice=Math.floor(Math.random()*6)+1;
console.log(dice);

document.querySelector('score-0').textContent=dice;



