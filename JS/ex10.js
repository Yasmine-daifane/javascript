/* 
======================= Ecrire un script qui permute deux nombres saisis dans deux inputs ==================================================
EXERCICE 10
*/
function generate(thearray , theinput){

    for( i = 0 ; i < thearray.length ; i++ ){
    
    if( thearray[i] ==  theinput ) {
      return true ;
      break;
    }
    }
}
    function valider() {
      let getNum = document.getElementById("get-Num").value;
      let creatNum = document.getElementById("creat-num");
        creatNum.innerHTML = "";
    
      for (i = 1; i <= getNum; i++) {
        creatNum.innerHTML += `<input id="creat-input${i}">`;
      }
      document.getElementById("pre1").style.visibility= "visible";
    }
    
    const arrayx = [];
    function serch() {
    
      let getNum = document.getElementById("get-Num").value;
      let inpA = document.getElementById("inpu-2").value;
      let resultSerch = document.getElementById("result-serch");
    
      for (i = 1; i < Number(getNum) +1 ; i++) {
        arrayx.push(document.getElementById("creat-input" + i).value);
      }
    
      serChResult = generate(arrayx , inpA );
      if (serChResult) {
        resultSerch.innerHTML = "Found: " + inpA;
      } else {
        resultSerch.innerHTML = "Not Found: " + inpA;
      }
      document.getElementById("pre1").style.visibility= "visible";
    }