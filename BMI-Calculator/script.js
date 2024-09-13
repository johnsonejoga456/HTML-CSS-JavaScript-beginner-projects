document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm =parseFloat(document.getElementById('height').value);
    const heightM = heightCm/ 100;

    if (weight && heightCm) {
        const bmi = (weight / (heightM * heightM)).toFixed(2);
        displayResult(bmi);
    } else {
        alert('Please enter valid numbers');
    }
});

// Display BMI Result
function displayResult(bmi) {
    let resultText = `Your BMI is ${bmi}.`;
    
    if (bmi <18.5) {
        resultText += "You're underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += "You're a normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += "You're overweight.";
    } else {
        resultText += "You are obese.";
    }
    document.getElementById('result').textContent = resultText;
}