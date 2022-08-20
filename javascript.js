const clear = document.getElementById('clear');
const plusminus = document.getElementById('plusminus');
const percentage = document.getElementById('percentage');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const decimal = document.getElementById('decimal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const equals = document.getElementById('equals');








let calc = {$1st:'',$op:'',$2nd:''};
let result = 0;
let currentDisplay = document.getElementById('display');
let num1
let num2


function pushToDisplay(){

}

function opCheck(){
if (typeof calc.$op == 'function'){
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
    a = parseInt(calc.$1st)
    b = parseInt(calc.$2nd)
    result = a+b
    calc.$1st = result;
       return result

    }
let calcSubtract = function(){
    a = parseInt(calc.$1st)
    b = parseInt(calc.$2nd)
    result = a-b;
    calc.$1st = result;
    return result
    }
    
let calcMulti = function(){
        a = parseInt(calc.$1st)
        b = parseInt(calc.$2nd)
           result = a*b;
           calc.$1st = result;
           return result
        }
let calcDiv = function(){
            a = parseInt(calc.$1st)
            b = parseInt(calc.$2nd)
            if (b===0){
                return result = "ERROR"            
            }
            else{
               result = a/b
               calc.$1st = result;
               return result
            }
            }

//clear function
function calcClear(){
    currentDisplay.textContent = '0'
    result = '0'
    for (let key in calc){
        delete calc[key]
    }
    calc = {$1st:'',$op:'',$2nd:''};
}



//runs the current operation stored in calculator.operator         
function calcEquals(){
   calc.$op()
   return currentDisplay.textContent = result;
}

function numInput(e){

    if (opCheck(calc.$op) && isEmpty(calc.$2nd)){
        num1 = calc.$1st += e;
        currentDisplay.textContent = num1
        console.table(calc);
    }
    if (!opCheck(calc.$op && !isEmpty(calc.$1st))){
        num2 = calc.$2nd +=e;
        currentDisplay.textContent = num2
        console.table(calc);
    }
}




//add event listeners
clear.addEventListener('click',calcClear);
//plus minus event listener
//percentage event listener
divide.addEventListener('click',calcDiv);
multiply.addEventListener('click',calcMulti);
subtract.addEventListener('click',calcSubtract);
add.addEventListener('click',calcAdd);
//decimal event listener
one.addEventListener('click',numInput(1))
two.addEventListener('click',numInput('2'))
three.addEventListener('click',numInput('3'))
four.addEventListener('click',numInput('4'))
five.addEventListener('click',numInput('5'))
six.addEventListener('click',numInput('6'))
seven.addEventListener('click',numInput('7'))
eight.addEventListener('click',numInput('8'))
nine.addEventListener('click',numInput('9'))
zero.addEventListener('click',numInput('0'))