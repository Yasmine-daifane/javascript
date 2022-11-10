function addNumbers() {
        var number;
        var result = "";
        number = Number(document.getElementById("number").value);
        for (var i = 1; i < 10; i++) {
            result = result + "<p>" + number + " x " + i + " = " + number * i + "</p>";
        }
        document.getElementById("result3").innerHTML = result;
        document.getElementById("pre1").style.visibility= "visible";
    }