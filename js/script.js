document.getElementById('form-inscricao').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
  
    if (nome && email) {
      document.getElementById('mensagem-sucesso').textContent = `Obrigado, ${nome}! Sua inscrição foi recebida.`;
      document.getElementById('form-inscricao').reset();
    } else {
      document.getElementById('mensagem-sucesso').textContent = 'Por favor, preencha todos os campos.';
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        // Scroll to the target element smoothly and center it in the viewport
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'  // Align the target to the center of the screen
        });

        // Delay the addition of the highlight class slightly to ensure scrolling is complete
        setTimeout(() => {
            targetElement.classList.add('highlight');
        }, 300);  // 300 milliseconds to allow the scroll animation to complete

        // Remove the highlight class after 2 seconds
        setTimeout(() => {
            targetElement.classList.remove('highlight');
        }, 4000);  // 300ms + 2000ms to remove highlight after 2 seconds
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the default behavior of adding # to the URL

      const targetID = this.getAttribute('href').substring(1); // Get the target element ID
      const targetElement = document.getElementById(targetID); // Find the target element

      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Update the browser's history stack with the current page's URL (without the #)
      history.pushState(null, null, window.location.pathname + window.location.search); 
  });
});
