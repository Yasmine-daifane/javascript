let chances = 10;
let count = 0;
let random = Math.floor(Math.random() * 50);


function enter() {
  console.log(random);
  let inpRand = document.getElementById("input-ex4").value;
  let Tentatives = document.getElementById("ex4-span");
  let result = document.getElementById("result");

  if (inpRand <= 50 && inpRand > 0) {
    
    while (inpRand != random && chances > 0) {
    result.innerHTML = "Réesseyez encore !";
      chances--;
      count++;
      Tentatives.innerHTML = `${chances}/10`;
      break
    }
  } 
  if (inpRand == random) {
    result.innerHTML = `You won after ${count} Tentatives.`;
  }
  if (chances === 0) { 
    result.innerHTML = "YOU LOST";
  }
  document.getElementById("pre1").style.visibility= "visible";
}

