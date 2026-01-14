document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio Loaded");

    // Contact Form Validation
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent submission to handle validation
            event.preventDefault();
            event.stopPropagation();
            
            let isValid = true;
            
            // Add 'was-validated' class to show Bootstrap validation styles
            form.classList.add('was-validated');
            
            // Custom checks if needed, but Bootstrap's :invalid selector handles visual cues
            // We can check specifics to show alerts
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                isValid = false;
            }
            
            // Check HTML5 validity
            if (form.checkValidity() && isValid) {
                // Determine Success Style based on theme? No, standard alert is fine or custom modal
                alert('Success! Message simulated sent.');
                form.reset();
                form.classList.remove('was-validated');
            }
        }, false);
    }
});
