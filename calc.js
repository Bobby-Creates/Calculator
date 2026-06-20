function add(a,b) {
 return a + b 
}

function divide(a,b){
    return a/b
}
function multiply(a,b){
   return a*b
}
function subtract(a,b){
    return a -b
}
function operate(operator,a,b){
    if(operator === "+"){
        return add(a,b)
    }
    if(operator === "-"){
        return subtract(a,b)
    }
    if(operator === "/"){
        return divide(a,b)
    }
    if(operator === "x" || operator=== "*"){
        return multiply(a,b)
    }
}
calculatorMemory={
    currentInput:""
    ,previousInput: ""
    ,activeOperator: null

}
let cScreen = document.querySelector("[data-display]")

function updateDisplay(){
   cScreen.textContent= calculatorMemory.currentInput;
}

let clearBtn=document.querySelector("[data-all-clear]")
clearBtn.addEventListener("click",event => {
    calculatorMemory.currentInput=""
    calculatorMemory.previousInput =""
    calculatorMemory.activeOperator=null
  updateDisplay()
})


let numBtn = document.querySelectorAll("[data-number]")
numBtn.forEach(button => {
   button.addEventListener("click", (event) => {
    calculatorMemory.currentInput+= button.textContent
    updateDisplay()
   })

})
let equalsBtn= document.querySelector("[data-equals]")
equalsBtn.addEventListener("click", (event) => {
    let num1=parseFloat(calculatorMemory.previousInput);
    let num2 =parseFloat(calculatorMemory.currentInput);
    let result = operate(calculatorMemory.activeOperator,num1,num2);
    calculatorMemory.currentInput =String(result);
    calculatorMemory.previousInput="";
    calculatorMemory,activeOperator=null;
    updateDisplay();
});


let oper = document.querySelectorAll("[data-operation]")
oper.forEach(button => {
    button.addEventListener("click",(event) => {
        calculatorMemory.previousInput=calculatorMemory.currentInput;
        calculatorMemory.activeOperator=button.textContent;
        calculatorMemory.currentInput="";
        updateDisplay();
    })
});