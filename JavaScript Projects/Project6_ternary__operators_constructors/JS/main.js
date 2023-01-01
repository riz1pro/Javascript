

function ride_Function()  {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}



function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = 'Color';
}

var Jack = new Vehicle("Audi", "RS5", 2020, "Red");
var Emily = new Vehicle("Mercedes-Benz", "C63 AMG", 2019, "White and Black");
var Erik = new Vehicle("BMW", "M4", 2020, "Baby Blue");
function my_Function()  {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik dives a" + Erik.Vehicle_Color +"colored" 
    + Erik.Vehicle_Model +"manufactured in" + Erik.Vehicle_Year;
}



function count_Function() {
    document.getElementById("counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
    
}