var reset = document.getElementById("reset")
var fivePercent = document.getElementsByTagName("button")[0];
var tenPercent = document.getElementsByTagName("button")[1];
var fifteenPercent = document.getElementsByTagName("button")[2];
var twentyFivePercent = document.getElementsByTagName("button")[4];
var fiftyPercent = document.getElementsByTagName("button")[5];
var custom = document.getElementById("customButton");
var bill = document.getElementById("bill");
var people = document.getElementById("people");
var tipPerPerson = document.getElementsByClassName("money")[0];
var totalPerPerson = document.getElementsByClassName("money")[1];
var percentPerPerson = 0;
var percentFuncCalled = false;

function calcPercent(num , percent){
    return (num/100)*percent;
}
function tipChange(per){
    percentPerPerson = Math.round(((calcPercent(bill.value, per)/people.value)+Number.EPSILON)*100)/100;
    if(people.value != 0){
    tipPerPerson.innerHTML = "$"+percentPerPerson;
    return percentPerPerson;
    }else{
        tipPerPerson.innerHTML = "$0.00";
    }
} 

setInterval(function findingBill(){
    var billPerPerson = Math.round(((bill.value/people.value)+Number.EPSILON)*100) / 100;
    if(people.value != 0){
    totalPerPerson.innerHTML = "$"+(billPerPerson+percentPerPerson);
    }else{
    totalPerPerson.innerHTML = "$0.00";
    }

    // checking which percent is selected
    window.onclick = e => {
        var percent = e.target.tagName.innerText  // to get the element tag name alone
    } 

    }, 1000);
    



function five(){
    tipChange(5);
    percentFuncCalled = true;
}
function ten(){
    tipChange(10);
    percentFuncCalled = true;
}
function fifteen(){
    tipChange(15);
    percentFuncCalled = true;
}
function twentyFive(){
    tipChange(25);
    percentFuncCalled = true;
}
function fifty(){
    tipChange(50)
    percentFuncCalled = true;
}

setInterval(function customPercent(){
    if(percentFuncCalled != true){
        tipChange(custom.value)
    }
}, 1000)

function resetBill(){
    tipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00";
    percentFuncCalled = false;
    bill.value = "";
    people.value = "";
}