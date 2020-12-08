// selectors
const noun = document.getElementById('noun1');
const nounTwo = document.getElementById('noun2');
const nounInputBox = document.getElementById("noun-input");
const submitButton = document.getElementById("submit-button");
const colorInputBox = document.getElementById("color1-input");
const verb = document.getElementById('verb1');
const verbInputBox = document.getElementById('verb1-input');
const body = document.getElementById('body');






//event listener

submitButton.addEventListener('click', () => {
     noun.textContent = nounInputBox.value;
     nounTwo.textContent = nounInputBox.value;
     verb.textContent = verbInputBox.value;
     body.style.backgroundColor = colorInputBox.value;
     nounInputBox.value='';
     verbInputBox.value='';
     colorInputBox.value='';

})

