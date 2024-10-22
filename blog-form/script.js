document.addEventListener('DOMContentLoaded', () => {
    contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message Sent!');
    });
});