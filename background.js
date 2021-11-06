function displayNum(idName, value) {
    document.getElementById(idName).innerHTML = "<h3>" + value + "</h3>"
}

var inputPIN = "";
var generatedPIN = "";

document.getElementById("generate-pin-button").addEventListener('click', function () {
    var genNum = Math.floor(Math.random() * 10000);
    generatedPIN = genNum;
    // document.getElementById("display-gen-num").innerHTML = "<h3>"+genNum+"</h3>";
    displayNum("display-gen-num", genNum);
    document.getElementById("number-of-tries").innerText = "3";
})


var allButton = document.getElementsByClassName("p-button");
for (var i = 0; i < allButton.length; i++) {
    // console.log(allButton[i].id);
    document.getElementById(allButton[i].id).addEventListener('click', function (event) {
        var pButton = event.target.innerText;
        if (inputPIN.length < 4) {
            if (pButton >= 0 && pButton <= 9) {
                inputPIN += pButton;
                // document.getElementById("input-num").innerHTML = "<h3>"+inputPIN+"</h3>";
                displayNum("input-num", inputPIN);
            }
        }
        else {
            displayNum("input-num", "At most 4-digits");
        }
        if (pButton == "C") {
            inputPIN = "";
            document.getElementById("pin-matched").style.display = "none";
            document.getElementById("pin-didnot-match").style.display = "none";
            displayNum("input-num", "|");
        }
        else if (pButton == "Del") {
            inputPIN = inputPIN.substr(0, inputPIN.length - 1);
            displayNum("input-num", inputPIN);
        }
    })
}
document.getElementById("submit-btn").addEventListener('click', function (event) {
    // console.log(generatedPIN);
    if (inputPIN == generatedPIN && inputPIN.length != 0 
        && document.getElementById("number-of-tries").innerText > 0) {
        document.getElementById("pin-matched").style.display = "block";
        document.getElementById("pin-didnot-match").style.display = "none";
    }
    else {
        document.getElementById("pin-didnot-match").style.display = "block";
        document.getElementById("pin-matched").style.display = "none";
        var tries = document.getElementById("number-of-tries").innerText;
        if (tries > 1) {
            document.getElementById("number-of-tries").innerText -= 1;
        }
        else {
            document.getElementById("number-of-tries").innerText = "No more ";
            tries = 0;
        }
    }
})