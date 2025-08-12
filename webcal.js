let firstNumber="";
let secondNumber="";
let operator="";

function append(number){
    playSound();
    if (operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        secondNumber+=number;
       document.getElementById('res').value=firstNumber + operator + secondNumber;
    }
}
function operate(op){
    playSound();
    operator=op;
    document.getElementById('res').value=firstNumber + operator;
}
function calculate(){
    playSound();
        switch(operator){
            case '+':
                result = parseInt(firstNumber) + parseInt(secondNumber);
                break;
                 case '-':
                result = parseInt(firstNumber) - parseInt(secondNumber);
                break;
                 case '*':
                result = parseInt(firstNumber) * parseInt(secondNumber);
                break;
                 case '/':
                result = parseInt(firstNumber) / parseInt(secondNumber);
                break;
        }
        document.getElementById('res').value=result;
}
function clearresult(){
    playSound();
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById('res').value="";
}
let clickSound = new Audio("WhatsApp Audio 2025-08-12 at 12.25.58_416368e7.mp3");
function playSound(){
    clickSound.currentTime=0;
    clickSound.play();
}