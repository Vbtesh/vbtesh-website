function operate() {
    var value1 = parseFloat(document.getElementById("textbox1").value);
    var operator = parseInt(document.getElementById("operators").value);
    var value2 = parseFloat(document.getElementById("textbox2").value);
    //var previous = parseFloat(document.getElementById("textarea1").value);
    var result;
    if (operator == 1) {
        result = value1 + value2;
    } else if (operator == 2) {
        result = value1 - value2;
    } else if (operator == 3) {
        result = value1 * value2;
    } else if (operator == 4) {
        result = value1 / value2;
    } else if (operator == 5) {
        result = value1 % value2;
    } else {
        result = value1 ** value2;
    }

    document.getElementById("textarea1").value = result;
}

function find_index() {
    var value1 = document.getElementById("textbox5").value;
    var whichIndex = parseInt(document.getElementById("index").value);
    var value2 = document.getElementById("textbox6").value;

    if (whichIndex == 1) {
        document.getElementById("textarea2").value = value1.indexOf(value2);
    } else {
        document.getElementById("textarea2").value = value1.lastIndexOf(value2);
    }
}

function button2click() {
    document.getElementById("reply").innerHTML = "<strong>Hi " + document.getElementById("name_1").value + "!</strong>";
    document.getElementById("reply").style.color = "blue";
    document.getElementById("reply").style.fontFamily = "Bellerose";
    document.getElementById("reply").style.fontSize = "20pt";
}
function slider2handler() {
    document.getElementById("sized").style.fontSize = document.getElementById("slider_2").value + "pt";
}
function button1click() {
    document.getElementById("span1").innerHTML = eval(document.getElementById("textbox4").value);
}