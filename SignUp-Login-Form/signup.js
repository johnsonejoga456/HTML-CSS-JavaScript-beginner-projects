document.getElementById('signup').addEventListener('submit', function(event) {

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const tel = document.getElementById('tel').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    if (!firstname || !lastname || !username || !email || !tel || !dob || !gender || !country) {
        alert('Please fill out all required fields.');
        return;
    }

    alert('Form submitted successfully!');
    
});
