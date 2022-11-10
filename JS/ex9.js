

function valide(){
  var taille = document.getElementById("taille").value;
for (i = 0; i < taille; i++) {
  var table1 = document.getElementById("affichage");
  var inputtri = document.createElement("input");
  inputtri.setAttribute("id", "inputId" + i);
  inputtri.setAttribute("type", "number");
  table1.appendChild(inputtri);
}
}


function trier() {
  let table = [];
  let inputvalue = document.querySelectorAll('#affichage input');
  inputvalue.forEach(element => {
  table.push(parseInt(element.value));
  });
 
  for(var i = 0;i<table.length;i++){
    for(var j= i+1;j<table.length;j++){
        if(table[i]>table[j]){
            var swap = table[i];
            table[i] = table[j];
            table[j] = swap;
          }
    }
    var tabl = document.getElementById("affich2");
    var inputtri = document.createElement("input");
    inputtri.setAttribute("id", "inputIdtri" + i);
    inputtri.setAttribute("type", "number");
    tabl.appendChild(inputtri);
    document.getElementById("inputIdtri" + i).value=table[i];
   } 





}