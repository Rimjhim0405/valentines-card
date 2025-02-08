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
    const yesButtons = document.querySelectorAll('button[onclick="handleYes()"]');
    yesButtons.forEach(button => {
        if (button.parentElement === document.body) {
            button.remove(); // Remove only the dynamically created buttons
        }
    });
    letter.classList.add('hidden');
    finalLetter.classList.remove('hidden');
  }
  
  function handleNo() {
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.onclick = handleYes;
  
    // Random position for the "Yes" button
    const x = Math.random() * (window.innerWidth - 100); // Random X position
    const y = Math.random() * (window.innerHeight - 50); // Random Y position
  
    yesButton.style.position = 'absolute';
    yesButton.style.left = `${x}px`;
    yesButton.style.top = `${y}px`;
  
    document.body.appendChild(yesButton); // Add the button to the body
  }