









document.getElementById('submitButton').onclick=function(){
let numGen = Math.floor(Math.random()*3+1);




if(document.getElementById('rock').checked) {
    y = 'rock'
  }else if(document.getElementById('paper').checked) {
   y = "paper"
  } else {y= 'scissors'};

console.log(`y=${y}`)
let userChoice = y









numGen === 1? cpuChoice = 'rock': numGen === 2? cpuChoice='paper':cpuChoice='scissors';

console.log(`You chose ${userChoice}`);
console.log(`CPU chose ${cpuChoice}`);

document.getElementById("choice").innerHTML = `You chose ${userChoice}! <br> CPU chose ${cpuChoice}.`;

//   rock > scissors> paper > rock

userChoice === 'rock' & cpuChoice === 'scissors' || 
userChoice === 'scissors' & cpuChoice === 'paper' || 
userChoice === 'paper' & cpuChoice === 'rock'? result='Won':
userChoice === cpuChoice? result='Tied':result='Lost'

console.log(`You ${result}!`)

document.getElementById("display").innerHTML = `You ${result}!`;










}