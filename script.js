function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const letter = document.getElementById('letter');

  envelope.classList.add('hidden');
  letter.classList.remove('hidden');
}

function handleYes() {
  const letter = document.getElementById('letter');
  const finalLetter = document.getElementById('final-letter');
  
  // Remove all dynamically created "Yes" buttons
  const yesButtons = document.querySelectorAll('.dynamic-yes-button');
  yesButtons.forEach(button => {
      button.remove(); // Remove all buttons with the class
  });
  
  letter.classList.add('hidden');
  finalLetter.classList.remove('hidden');
}

function createYesButton() {
  const yesButton = document.createElement('button');
  yesButton.textContent = 'Yes';
  yesButton.classList.add('dynamic-yes-button'); // Add a specific class
  yesButton.onclick = handleYes;
  yesButton.style.position = 'absolute';
  
  // Random position within the viewport
  const x = Math.random() * (window.innerWidth - 100); // Adjust for button width
  const y = Math.random() * (window.innerHeight - 50); // Adjust for button height
  
  yesButton.style.left = `${x}px`;
  yesButton.style.top = `${y}px`;
  
  // Add some basic styling
  yesButton.style.padding = '10px 20px';
  
  yesButton.style.color = 'white';
  yesButton.style.border = 'none';
  yesButton.style.borderRadius = '5px';
  yesButton.style.cursor = 'pointer';
  
  document.body.appendChild(yesButton);
}

function handleNo() {
  createYesButton();
}
