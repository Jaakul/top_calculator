(function(){

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
let result = ''
let currentDisplay = document.getElementById('display');
let num1
let num2
let equalStatus = false

///regular expression for keyboard listener///
const keyRegEx = /[0-9]/

/// functions that test true/false
function operatorEmpty(){
if (typeof calc.$op == 'function'){
    return false
}
return true
}

function isEmpty(e){
      for (let key in e){
        return false
    }  
    return true
}


//**function to check if number exceeds window space */
function displaySplitter(){
    if(currentDisplay.textContent.includes('e')){
        if(currentDisplay.textContent.length<9){
            return currentDisplay.textContent
        }
        let x
        let y
        x = currentDisplay.textContent.slice(0,5)
        y = currentDisplay.textContent.slice(-4)
        return currentDisplay.textContent = x+y;
        
    }
    if(currentDisplay.textContent.length>9){
        let x
        x = (currentDisplay.textContent).slice(0,9);
        console.log(x.length);
        return currentDisplay.textContent = x
    }
    }


///all operator functions - + * ////
let calcAdd = function(){
    a = parseFloat(calc.$1st)
    b = parseFloat(calc.$2nd)
    result = a+b
    calc.$1st = result;
    displaySplitter()
       return result
    }

let calcSubtract = function(){
    a = parseFloat(calc.$1st)
    b = parseFloat(calc.$2nd)
    result = a-b;
    calc.$1st = result;
    displaySplitter()
    return result
    }
    
let calcMulti = function(){
        a = parseFloat(calc.$1st)
        b = parseFloat(calc.$2nd)
           result = a*b;
           calc.$1st = result;
           displaySplitter()
           return result
    }
let calcDiv = function(){
    a = parseFloat(calc.$1st)
    b = parseFloat(calc.$2nd)
        if (b===0){
            return result = "ERROR"            
        }
        else{
            result = a/b
            calc.$1st = result;
            displaySplitter()
            return result
        }

    }

///clear screen function///
function calcClear(){
    console.log("CLEARED")
    currentDisplay.textContent = '0'
    result = ''
    for (let key in calc){
        delete calc[key]
    }
    calc = {$1st:'',$op:'',$2nd:''};
    equalStatus = false;
}


//EQUALS function runs the current operation stored in calc.$op///
function calcEquals(){
   calc.$op()
   currentDisplay.textContent = result;
   equalStatus = true;
   displaySplitter();
   console.table(calc);
}


//inputs number into object key 1 or 2 depending on operator presence
function numInput(){
    e=this.textContent;
    if (operatorEmpty(calc.$op) && isEmpty(calc.$2nd)){
        num1 = calc.$1st += e;
        currentDisplay.textContent = num1
        console.table(calc);
    }
    if (!operatorEmpty(calc.$op) && !isEmpty(calc.$1st)){
        num2 = calc.$2nd +=e;
        currentDisplay.textContent = num2
        console.table(calc);
    }

    if (calc.$1st =="00"){
        calc.$1st = ''
        currentDisplay.textContent= '0'
        console.table(calc);
    }
    if (calc.$2nd =="00"){
        calc.$2nd = ''
        currentDisplay.textContent= "0"
        console.table(calc);
    }
    displaySplitter()
    
}


//adds a decimal
function decInput(){
    e='.'

    if (decCount(calc.$2nd,".")===1){
        return
    }
    if (decCount(calc.$1st,".")===1 && isEmpty(calc.$2nd)){
        return
    }
    if (operatorEmpty(calc.$op) && isEmpty(calc.$2nd)){
        num1 = calc.$1st += e;
        currentDisplay.textContent = num1
        console.table(calc);
    }
    if (!operatorEmpty(calc.$op) && !isEmpty(calc.$1st)){
        num2 = calc.$2nd +=e;
        currentDisplay.textContent = num2
        console.table(calc);
    }
    displaySplitter()
}
//prevents multiple decimal insertion
function decCount(str,x){
    return (str.split(x)).length - 1;
}


// POSITIVE OR NEGATIVE KEY //
function posOrNeg(){
if (typeof result === 'number'){
    calc.$1st = result.toString();
    currentDisplay.textContent = calc.$1st
    calc.$op = ''
    calc.$2nd = ''
    result = result.toString();
}
    if (operatorEmpty(calc.$op) && isEmpty(calc.$2nd)){
        if(parseFloat(calc.$1st)>0){
            console.log('triggered')
            num1 = calc.$1st.padStart(calc.$1st.length+1,'-')
            currentDisplay.textContent=num1;
            calc.$1st=num1;
            console.table(calc);

        }
        else{
        num1 = calc.$1st.slice(1);
        currentDisplay.textContent=num1;
        calc.$1st = num1
        console.table(calc)
        }
    }
    if (!operatorEmpty(calc.$op) && !isEmpty(calc.$1st)){
        if(parseFloat(calc.$2nd)>0){
            num2 = calc.$2nd.padStart(calc.$2nd.length+1,'-')
            currentDisplay.textContent=num2;
            calc.$2nd=num2;
            console.table(calc);
        }
        else{
        num2 = calc.$2nd.slice(1);
        currentDisplay.textContent=num2;
        calc.$2nd = num2
        console.table(calc)
        }
    }

}

//percentage function

function percentFunc(){
    if (typeof result === 'number'){
        calc.$1st = result.toString();
        currentDisplay.textContent = calc.$1st
        calc.$op = ''
        calc.$2nd = ''
        result = result.toString();
    }

    if (operatorEmpty(calc.$op) && isEmpty(calc.$2nd)){
        calc.$1st = num1 = (parseFloat(calc.$1st)/100).toString()
        currentDisplay.textContent = num1
        console.table(calc);
    }
    if (!operatorEmpty(calc.$op) && !isEmpty(calc.$1st)){
        calc.$2nd= num2 = (parseFloat(calc.$2nd)/100).toString()
        currentDisplay.textContent = num2
        console.table(calc);
}
        displaySplitter()
}

//add event listeners here
clear.addEventListener('click',calcClear);
plusminus.addEventListener('click',posOrNeg);
percentage.addEventListener('click',percentFunc)
divide.addEventListener('click',function(){trueOpFunc(calcDiv)});
multiply.addEventListener('click',function(){trueOpFunc(calcMulti)});
subtract.addEventListener('click',function(){trueOpFunc(calcSubtract)});
add.addEventListener('click',function(){trueOpFunc(calcAdd)});
decimal.addEventListener('click',decInput);
one.addEventListener('click',numInput);
two.addEventListener('click',numInput);
three.addEventListener('click',numInput);
four.addEventListener('click',numInput);
five.addEventListener('click',numInput);
six.addEventListener('click',numInput);
seven.addEventListener('click',numInput);
eight.addEventListener('click',numInput);
nine.addEventListener('click',numInput);
zero.addEventListener('click',numInput);
equals.addEventListener('click',calcEquals);

/// new functions for operators

let trueOpFunc = function(opHere){
    //if there's something in the operator field
if (operatorEmpty()==false && equalStatus==true){
    calc.$1st = result.toString()
    calc.$op=opHere;
    calc.$2nd = '';
    equalStatus == false;
}
if (operatorEmpty()==false && equalStatus == false){
    calcEquals();
    calc.$1st = result.toString()
    calc.$op=opHere;
    calc.$2nd = '';
}
else {calc.$op = opHere}
}




/////KEYBOARD LISTENER//////
document.addEventListener('keydown', (e)=>{
    if (e.key.match(keyRegEx)){
    keyNumInput(e.key)}}
    )
/////Keyboard Num Input////
function keyNumInput(x){
    e=x
    if (operatorEmpty(calc.$op) && isEmpty(calc.$2nd)){
        num1 = calc.$1st += e;
        currentDisplay.textContent = num1
        console.table(calc);
    }
    if (!operatorEmpty(calc.$op) && !isEmpty(calc.$1st)){
        num2 = calc.$2nd +=e;
        currentDisplay.textContent = num2
        console.table(calc);
    }
    if (calc.$1st =="00"){
        calc.$1st = ''
        currentDisplay.textContent= '0'
        console.table(calc);
    }
    if (calc.$2nd =="00"){
        calc.$2nd = ''
        currentDisplay.textContent= "0"
        console.table(calc);
    }
    displaySplitter()
    
}

//equals//
document.addEventListener('keydown', (e)=>{
    if (e.key=="Enter"){
   calcEquals();
    }}
    )

//add//
document.addEventListener('keydown', (e)=>{
    if (e.key=="+"){
    trueOpFunc(calcAdd);
    }}
    )

//subtract//

document.addEventListener('keydown', (e)=>{
    if (e.key=="-"){
        trueOpFunc(calcSubtract);
    }}
    )

//multiply//
document.addEventListener('keydown', (e)=>{
    if (e.key=="*"){
        trueOpFunc(calcMulti);
    }}
    )

//divide//
document.addEventListener('keydown', (e)=>{
    if (e.key=="/"){
        trueOpFunc(calcDiv);
    }}
    )

//clear//
document.addEventListener('keydown', (e)=>{
    if (e.key=="Delete"||e.key=="Backspace"){
    calcClear()
    }}
    )

//decimal//
document.addEventListener('keydown', (e)=>{
    if (e.key=="."){
    decInput();
    }}
    )



})();