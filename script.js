// Dit script vangt het verzenden op en gebruikt de verborgen link uit config.js
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Zorgt dat de pagina niet ververst bij het klikken
    
    const formData = new FormData(this);
    
    // Hier sturen we de data veilig naar jouw Formspree URL
    fetch(CONFIG.FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('Bedankt! Je bericht is succesvol verzonden.');
            this.reset(); // Maakt het formulier weer helemaal leeg
        } else {
            alert('Oeps! Er ging iets mis bij het verzenden.');
        }
    })
    .catch(error => {
        alert('Er is een netwerkfout opgetreden. Probeer het later opnieuw.');
    });
});