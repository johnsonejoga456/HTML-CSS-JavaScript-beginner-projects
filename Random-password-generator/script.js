document.getElementById('generateButton').addEventListener('click', () => {
    const password = generatepassword();
    document.getElementById('passwordDisplay').value = password;
});

const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberCHars = '0123456789';
const allChars = lowerChars + upperChars + numberCHars;

// Generate random password
function generatepassword(length = 6) {
    let password = '';
    for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}