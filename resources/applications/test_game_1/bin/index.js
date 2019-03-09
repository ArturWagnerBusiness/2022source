const canvas = document.getElementById("canvas");

// Game display settings
canvas.style.backgroundColor = "white";
canvas.style.cursor = "none";
canvas.width = 500;
canvas.height = 800;

const ctx = canvas.getContext("2d");


// Game set up
const raimu = document.getElementById('raimu');

var animation = 0;
var animation_timer = 0;
var direction = 0;

var playerx = canvas.width / 2;
var playery = canvas.height / 2;

canvas.addEventListener("mousemove", function(event){
  playerx = event.clientX - this.offsetLeft;
  playery = event.clientY - this.offsetTop;
});


function now() {
    var date = new Date();
    return date.getTime();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(raimu, 0 + 32*animation, 0, 32, 46, playerx - 16, playery - 23, 32,36);
}

function update() {
    if (animation_timer + 1000/10 < now()) {
        animation++;
        animation_timer = now();
    }
    if (animation > 7) {
        animation = 0;
    }
    draw();
    requestAnimationFrame(update);
}

update()