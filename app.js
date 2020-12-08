// selectors
const noun = document.getElementById('noun1');
const nounInputBox = document.getElementById("noun-input");
const submitButton = document.getElementById("submit-button");


const color = document.getElementById('color1');
const colorInputBox = document.getElementById("color1-input");
const verb = document.getElementById('verb1');
const verbInputBox = document.getElementById('verb1-input');






//event listener

submitButton.addEventListener('click', () => {
     noun.textContent = nounInputBox.value;
     nounTwo.textContent = nounInputBox.value;
     nounInputBox.value='';
     verb.textContent = verbInputBox.value;
     color.textContent = colorInputBox.value;

})

