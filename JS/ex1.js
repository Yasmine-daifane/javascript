let swap = document.getElementById("swap");
  swap.addEventListener("click",(e)=>{
    e.preventDefault()
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    [number1,number2]=[number2,number1];
    document.getElementById("num1").value=number1;
    document.getElementById("num2").value=number2;
    document.getElementById("pre1").style.visibility= "visible";
  })


