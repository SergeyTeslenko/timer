const h1 = document.getElementsByTagName('h1')[0];
const start = document.getElementById('strt');
const stp = document.getElementById('stp');
const rst = document.getElementById('rst');
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stp.onclick = function() {
    clearTimeout(t);
}
rst.onclick = function() {
    h1.textContent = "00:00:00";
    sec = 0; min= 0; hrs = 0;
}

