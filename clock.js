setInterval(clock, 1000);

function clock()
{
let date  = new Date();
/*
let hour   = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let time = hour + ":" + minute + ":" + second;

document.getElementById("demo").innerHTML = time;
*/
document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}