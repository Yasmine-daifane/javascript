
function add() {
    let inputOne = document.getElementById("inp-1").value;
    let inputTwo = document.getElementById("inp-2").value;
    let resultCalc = document.getElementById("resultCalc");

    resultCalc.value = Number(inputOne) + Number(inputTwo);
    document.getElementById("pre1").style.visibility= "visible";
}
function subs() {
    let inputOne = document.getElementById("inp-1").value;
    let inputTwo = document.getElementById("inp-2").value;
    let resultCalc = document.getElementById("resultCalc");

    resultCalc.value = Number(inputOne) - Number(inputTwo);
    document.getElementById("pre1").style.visibility= "visible";
}
function multi() {
    let inputOne = document.getElementById("inp-1").value;
    let inputTwo = document.getElementById("inp-2").value;
    let resultCalc = document.getElementById("resultCalc");

    resultCalc.value = Number(inputOne) * Number(inputTwo);
    document.getElementById("pre1").style.visibility= "visible";
}
function devide() {
    let inputOne = document.getElementById("inp-1").value;
    let inputTwo = document.getElementById("inp-2").value;
    let resultCalc = document.getElementById("resultCalc");

    resultCalc.value = Number(inputOne) / Number(inputTwo);
    document.getElementById("pre1").style.visibility= "visible";
}

