function full_Sentence() {
    var part_1 = "I have " ;
    var part_2 = "made this " ;
    var part_3 = "into a complete " ;
    var part_4 = "sentence. " ;
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}




function slice_Method() {
    var sentence ="Hard work and makes Johnny a successful man.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}


function toUppercase_Method() {
    var text = "Hard work and makes Johnny a successful man.";
    var result = text.toUpperCase();
    document.getElementById("up").innerHTML = text.toUpperCase();
}





function search_Method() {
    var text = "Hard work and makes Johnny a successful man.";
    var position = text.search("blue");
    document.getElementById("look").innerHTML = text.search("blue");
}



function string_Method() {
    var X  = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}



function precision_Method()  {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X .toPrecision(10);
}
