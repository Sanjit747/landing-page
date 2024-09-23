// Scroll to the form when the "Get Started" button is clicked
function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    
    // Simulate form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a thank you message
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
    successMessage.textContent = `Thank you, ${name}, for signing up! We'll contact you at ${email}.`;

    // Clear the form
    document.getElementById('signup-form').reset();
}
