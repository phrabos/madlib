// selectors
const noun = document.getElementById('noun');
const nounInputBox = document.getElementById("noun-input");
const submitButton = document.getElementById("submit-button");
const nounTwo = document.getElementById('noun-2');
//event listener

submitButton.addEventListener('click', () => {
     noun.textContent = nounInputBox.value;
     nounTwo.textContent = nounInputBox.value;
     nounInputBox.value='';

})


