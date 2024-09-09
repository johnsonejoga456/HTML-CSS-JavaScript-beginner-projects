const loginForm = document.getElementById('login');

loginForm.addEventListener('submit', function(event) {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Please fill in both username and password.');
        return;
    }

    if (username === 'testUser' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password.');
    }
});
