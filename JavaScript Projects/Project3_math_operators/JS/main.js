function addition_Function() {   //defining a function and naming it
    var addtion = 2+2;            // this is the varialble
    document.getElementById("Math").innerHTML="2+2 = "+ addtion; //Putting the value of the result
}


function subtraction_Function() {   //defining a function and naming it
    var subtraction = 5-2;
    document.getElementById("Math2").innerHTML="5-2 = "+ subtraction;
}



function more_Math() {   //defining a function and naming it
    var simple_Math = (1 + 2) *  10 / 2 -5;
    document.getElementById("Math3").innerHTML = "1 + 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_operator() {   //defining a function and naming it
    var simple_math = 25 % 6;
    document.getElementById("Math4").innerHTML= "When you divide 25 by 6 you have a remainder of: "+ simple_math;
}


function negation_operator() {
    var X =10;
    document.getElementById("Math5").innerHTML = -X;

}
    function increment_operator() {
        var X = 5;
        document.getElementById("Math6").innerHTML = ++X;

}


function decrement_operator() {
    var X = 0;
    document.getElementById("Math7").innerHTML = --X;

}






function math_random() {
    var X = 10;
    document.getElementById("Math8").innerHTML = (Math.random() * 100);

}









var X = 5; // for future reference all the below
X++;
document.write(X)

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());

window.alert(Math.random() * 100);


var number = 4.7;

var newNumber = 26 + Math.round(number);

document.write(newNumber);




