
window.alert("Hello World");

var A = "this is a string"+"<br>";


document.write(A);

document.write("\"Be who you are and say what you feel," 
+ "because those who mind don\`t matter and those who matter don\`t mind.\""
+ "-Dr. Seuss"+"<br>");

var family ="Bhatties"+"<br>", Dad="Najib"+"<br>", Mum="Rukhasana"+"<br>", Sister="Kani"+"<br>";

document.write(Mum);

var blues="I have the blues"+"<br>";
var blues =blues.fontcolor("blue");
document.write(blues);

var B = "concatenated"   +   "String"+"<br>";

document.write(B)


document.write(3+3);



function My_First_Function () {   //defining a function and naming it
    var str="This text is green!";
    var result=str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML=result;
}