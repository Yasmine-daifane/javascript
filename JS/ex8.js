function go() {
    var str = document.getElementById("inp-8").value;
    let Res = str.replace(/[^aeiou]/gi, "").length;
    
    document.getElementById("result").innerHTML = "The number of vowels u entered is " + Res ;
    document.getElementById("pre1").style.visibility= "visible";

  }