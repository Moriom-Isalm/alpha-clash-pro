//function play(){
   // const homeSection = document.getElementById('home-screen');
   // homeSection.classList.add('hidden')

  //  const playGroundSection = document.getElementById('play-ground')
    //console.log(playGround.classList)
  //  playGroundSection.classList.remove('hidden');
//}
function handelKeyboardKeyupEvent(event){
  const playpressed = event.key;

  const currentAlphabetElementId = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElementId.innerText;
  const expectedAlphbet = currentAlphabet.toLowerCase();
  
  if(playpressed === expectedAlphbet){
    console.log('you got a point');

const currentScore = getTextElementValueById('current-score');
const updatedScore = currentScore + 1;
setTextElementValueById('current-score', updatedScore);
    //..................................
   // const currentScoreElement = document.getElementById('current-score');
    //const currentScoreText = currentScoreElement.innerText;
   // const currentScore = parseInt(currentScoreText);
   // console.log(currentScore);

  //  const newScore = currentScore + 1;
  //  currentScoreElement.innerText = newScore;
    
    removeBackgrounColourById(expectedAlphbet);
    continueGame();
  }

  else {
    console.log('you loss one life');

   const currentLife = getTextElementValueById('current-life');
   const updatedLife = currentLife - 1;
   setTextElementValueById('current-life', updatedLife);

   if(updatedLife === 0){
     gameOver();
   }

    //............................
    //const currentLifeElement = document.getElementById('current-life');
  //  const currentLifeText = currentLifeElement.innerText;
    //const currentLife = parseInt(currentLifeText);
  //  console.log(currentLife);
   // const newLife = currentLife - 1;
  //  currentLifeElement.innerText = newLife;

  }

}

document.addEventListener('keyup', handelKeyboardKeyupEvent);



function continueGame(){
  const alphabets = getARandomAlphabet();
  //console.log('your random alphabet:', alphabets);

  const currentAlphabetElementId = document.getElementById('current-alphabet')
  currentAlphabetElementId.innerText = alphabets;

  setBackgrounColourById(alphabets);

}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}

function gameOver(){
  hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgrounColourById(currentAlphabet);
}
