/*function staircase(n) {
 for (let a = 0; a < n; a++){
  let step = ' ';

  for (let b = 0; b < n; b++) {
   if (b <=a) {
    step += '#'
   } else {
    step += ' ';
   }
  }
  console.log(step)
 }
}*/
function staircase(staircaselength) {
 //console.log("Enter word")
 let stairs = "";
 for (let i = 0; i < staircaselength; i++) {
  let stair = "#".repeat(i + 1) + "\n";
  stairs += stair;
 }

 console.log(stairs.trim());
}

staircase(6);