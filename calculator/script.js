const answer = document.getElementById("answer");
const buttons = document.querySelectorAll(".button");

// Initialize variables for the current input and operation
let currentInput = "";
let operator = "";
let firstOperand = "";
let resultDisplayed = false; // To track if a result was displayed

for (const button of buttons) {
    button.addEventListener("click", () => {
        const value = button.value;

        // Handle Clear button
        if (value === "Clear") {
            operator = "";
            firstOperand = "";
            currentInput = "";
            answer.value = 0; // Reset display to 0
            resultDisplayed = false; // Reset the result tracking
        }
        // Handle Equals button
        else if (value === "=") {
            if (firstOperand && operator && currentInput) {
                const result = calculate(firstOperand, operator, currentInput);
                answer.value = `${firstOperand} ${operator} ${currentInput} = ${result}`;
                firstOperand = result; // Store the result for further operations
                operator = "";
                currentInput = "";
                resultDisplayed = true; // Mark that a result was displayed
            }
        }
        // Handle operators
        else if (["+", "-", "/", "*", "%"].includes(value)) {
            if (currentInput || resultDisplayed) {
                if (resultDisplayed) {
                    resultDisplayed = false; // If a result was displayed, start a new operation
                } else {
                    firstOperand = currentInput; // Store the current input as the first operand
                }
                operator = value; // Store the operator
                currentInput = ""; // Clear current input for the next number
                answer.value = `${firstOperand} ${operator}`; // Display first operand and operator
            }
        }
        // Handle number inputs
        else {
            if (resultDisplayed) {
                // If the result was displayed and the user enters a new number, reset the current input
                currentInput = value;
                resultDisplayed = false; // Clear the resultDisplayed flag
            } else {
                currentInput += value; // Append the value to the current input
            }

            if (operator) {
                answer.value = `${firstOperand} ${operator} ${currentInput}`; // Display the full operation
            } else {
                answer.value = currentInput; // Just show the current input (first operand)
            }
        }
    });
}

// Perform calculation based on the operator
function calculate(operand1, operator, operand2) {
    const num1 = parseFloat(operand1); // Convert first operand to a number
    const num2 = parseFloat(operand2); // Convert second operand to a number

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error"; // Avoid division by zero
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2; // Modulo operation
        default:
            return "Error";
    }
}
