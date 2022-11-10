function diamond() {
    let enter = document.getElementById("enter").value;
    let output = document.getElementById("output");
     
    output.innerHTML = "";

    let start = "*";
    let space = " ";
    let k;
    let i = 1

  if (enter % 2 != 0) {
      while (i <= enter) {
          k = (enter - 1) / 2;

          output.innerHTML += `${space.repeat(k)} ${start.repeat(i)} <br>`
          output.style.textAlign = "center";
          i += 2;
      }

      while (i >= 2) {
          i -= 2;
          k = (enter - i) / 2;
          if (i < enter) {
              output.innerHTML += `${space.repeat(k)} ${start.repeat(i)} <br>`
          } else {
              continue;
          }

      }
  } else {
     output.innerHTML += `Error!!!!!!!`
  }
  document.getElementById("pre1").style.visibility= "visible";
} 