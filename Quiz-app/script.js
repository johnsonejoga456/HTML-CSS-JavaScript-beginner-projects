document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const answers = {
        q1: 'c',
        q2: 'a',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'b',
        q7: 'a',
        q8: 'b',
        q9: 'a',
        q10: 'a',
    };

    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }
    
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
    document.querySelector('.container').appendChild(resultDiv);
});