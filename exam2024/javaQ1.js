let msg = prompt("Enter Your Message");
let newmsg = msg.toUpperCase();
console.log(newmsg);
if (newmsg.length < 40) {
let counter = 0;
for(let i in newmsg) {
 if (newmsg[i] == 'A' || newmsg[i] == 'D' ||newmsg[i] == 'O' ||newmsg[i] == 'Q' ||newmsg[i] == 'p' ||newmsg[i] == 'R')
 counter += 1;
if(newmsg[i] == 'B')
counter += 2;
}
console.log(counter);
}