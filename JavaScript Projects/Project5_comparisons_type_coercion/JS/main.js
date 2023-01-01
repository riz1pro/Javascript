function my_Function() {
     
    document.getElementById("Test1").innerHTML =( 0/0);
}


function true_Function() {
    
    document.getElementById("Test2").innerHTML = isNaN('This is a string');

}


function false_Function() {

    document.getElementById("Test3").innerHTML = isNaN('007');

}

document.write(2E10);

document.write(-2E10);

document.write(10>2);

document.write(10<2);



function infi_Function() {
    var X = 0;
    document.getElementById("Infinity").innerHTML = (3E310);

}




function neg_Function() {
    var X = 0;
    document.getElementById("Infinity2").innerHTML = (-3E310);
}

console.log(2+2);

document.write("10"+5);



console.log(3<2);

document.write(10 == 10);

document.write(3 == 11);

X = 10;
Y = 10;
document.write(X == Y)

X = 82;
Y = "82";
document.write(X === Y);

A = "Magnus";
B = "Magnus";
document.write(A === B);


document.write(5>2 && 10>2);

document.write(5>10 && 10>2);

document.write(5>10 || 10>4);


document.write(5>10 || 10>20);



function not_Function() {

    document.getElementById("Not").innerHTML = !(5>10);
}


function not1_Function() {

    document.getElementById("Not1").innerHTML = !(20>10);

}


document.write(Bigger = (5>1)? "Left number is bigger than":"Right number is bigger");


function ride_Function()  {
    var Height, Can_ride;
    Height = document.getElementByID("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}