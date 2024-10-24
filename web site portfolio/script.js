document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        // Here you would typically send the form data to a server
    } else {
        alert('Please fill in all fields.');
    }
});
