
if (1<2) {
    document.write("The left number is smaller than the number on th right.")
}


function get_Date() {
    if (new Date().getHours() > 00) {
         document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";

    }
    else {
        Vote = "You are not old enough to vote!";
    }

document.getElementById("How_old_are_you?").innerHTML = Vote;
}



function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon!";
    }
    else {
        Reply = " It is the evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
