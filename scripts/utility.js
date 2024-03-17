function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
  
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function setBackgrounColourById(elementId){
   const element =document.getElementById(elementId);
   element.classList.add('bg-orange-400');
}

function removeBackgrounColourById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
   

    const alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet;

}