const clear = document.getElementById('clear');
const plusminus = document.getElementById('plusminus');
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const subtract = document.getElementById('subtract');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const add = document.getElementById('add');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

//add event listeners

let calculator = {firstNum:'',operator:'',secondNum:''};
let result = 0;
let currentDisplay = document.getElementById('display');
let num1
let num2


function pushToDisplay(){

}

function opCheck(){
if (typeof calculator.operator == 'function'){
    return false
}
return true
}


function isEmpty(e){
      for (let key in e){
        return false
    }  
    return true;



}

//all operator functions
let calcAdd = function(){
    a = parseInt(calculator.firstNum)
    b = parseInt(calculator.secondNum)
       return result = a+b;
    }
let calcSubtract = function(){
    a = parseInt(calculator.firstNum)
    b = parseInt(calculator.secondNum)
       return result = a-b;
    }
    
let calcMulti = function(){
        a = parseInt(calculator.firstNum)
        b = parseInt(calculator.secondNum)
           return result = a*b;
        }
let calcDiv = function(){
            a = parseInt(calculator.firstNum)
            b = parseInt(calculator.secondNum)
            if (b===0){
///need to consider if divided by 0///               
            }
               return result = a/b
            }




//runs the current operation stored in calculator.operator         
function calcEquals(){
   calculator.operator()
   return currentDisplay.textContent = result;

}

function numInput(e){

    if (opCheck(calculator.operator) && isEmpty(calculator.secondNum)){
        num1 = calculator.firstNum += e;
        currentDisplay.textContent = num1
        console.table(calculator);
    }
    if (!opCheck(calculator.operator && !isEmpty(calculator.firstNum))){
        num2 = calculator.secondNum +=e;
        currentDisplay.textContent = num2
        console.table(calculator);
    }
}