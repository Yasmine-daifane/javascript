/*
======================= Ecrire un script qui permute deux nombres saisis dans deux inputs ==================================================
*/

function enter() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value.trim();
  const result = document.getElementById("resulttwo")
  let add = input1.split(" ");

  let recherchResult = add.includes(input2);
  if (recherchResult) result.innerHTML = "trouvé " + input2;
  else result.innerHTML = "pas trouvé " + input2;
}

function suprime() {
  let input1 = document.getElementById("input-1").value;
  let input2 = document.getElementById("input-2").value;


  const newResult = document.getElementById("resulttwo");
  newResult.innerHTML = input1.replace(input2 , "");
  document.getElementById("pre1").style.visibility= "visible";
};