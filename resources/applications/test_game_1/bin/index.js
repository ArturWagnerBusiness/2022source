function print() {
    console.log(arguments);
}

const canvas = document.getElementById("canvas");

// Game display settings
canvas.style.backgroundColor = "white";
canvas.style.cursor = "none";
canvas.width = 500;
canvas.height = 800;

const ctx = canvas.getContext("2d");


// Game set up
var cursorx = 0;
var cursory = 0;
var keyboard = {};

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let keyboardKeys = alphabet +
                   alphabet.toUpperCase() +
                   "1234567890" +
                   "`,./;'#[]-=" +
                   "¬!£$%^&*()_+}{~@:?><" + " ";

for (var i = 0; i < keyboardKeys.length; i++){
    keyboard[keyboardKeys[i]] = false;
}
class FireBall{
    constructor(x, y, velx=0, vely=-5) {
        this.texture = document.getElementById('fire_ball');
        this.animation = 0;
        this.animation_timer = 0;
        this.animation_loop_time = 300;
        this.direction = 0;
        this.x = x;
        this.y = y;
        this.vely = vely;
        this.velx = velx;
    }
    tick() {
        // animation
        if (this.animation_timer + this.animation_loop_time < Date.now()) {
            this.animation++;
            
            if (this.animation > 2) {
                this.animation = 0;
            }
            
            this.animation_timer = Date.now();
        }
        
        // fly forward at speed/tick
        this.y += this.vely;
        this.x += this.velx;
    }
    draw() {
        ctx.drawImage(this.texture, 32*this.animation, 0, 30, 30, this.x - 16, this.y - 16, 30,30);
    }
}
// The player
class Player{
    constructor() {
        this.texture = document.getElementById('raimu');
        
        this.animation = 0;
        this.animation_timer = Date.now();
        this.animation_loop_time = 100;
        
        this.fire_timer = Date.now();
        this.fire_loop_time = 400;
        this.fire_balls = [];
        
        this.direction = 0;
        this.direction_moving = 0;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speed = 2;
    }
    
    fire(type="normal") {
        if(type==="normal"){
            var fireball = new FireBall(this.x, this.y - 30, 0);
            this.fire_balls.push(fireball);
            var fireball = new FireBall(this.x+5, this.y - 30, 1);
            this.fire_balls.push(fireball);
            var fireball = new FireBall(this.x-5, this.y - 30, -1);
            this.fire_balls.push(fireball);
            this.fire_timer = Date.now();
        }
    }
    tick() {
        // fly left/right
        if ((keyboard["a"] && keyboard["d"]) || !(keyboard["a"] || keyboard["d"])) {
            //pass
        } else if (keyboard["a"] && 0 < this.x){
            this.x -= this.speed;
        } else if (keyboard["d"] && this.x < canvas.width){
            this.x += this.speed;
        }
        
        console.log(this.direction);
        if ((keyboard["a"] && keyboard["d"]) || !(keyboard["a"] || keyboard["d"])) {
            // animation
            if (this.animation_timer + this.animation_loop_time < Date.now()) {
                if (this.direction > 0) {
                    this.direction_moving = 96;
                    this.direction -= 1;
                    this.animation = this.direction;
                } else if (this.direction < 0) {
                    this.direction_moving = 48;
                    this.direction += 1;
                    this.animation = -this.direction;
                } else {
                    this.direction_moving = 0;
                    this.animation++;
                    if (this.animation > 7) {
                        this.animation = 0
                    }
                }
                this.animation_timer = Date.now();
            }
        } else if (keyboard["a"]){
            if (this.animation_timer + this.animation_loop_time < Date.now()) {
                if (this.direction > 0) {
                    this.direction_moving = 96;
                    this.direction -= 1;
                    this.animation = this.direction;
                } else if (this.direction === 0) {
                    this.direction_moving = 0;
                    this.direction -= 1;
                    this.animation = 0;
                } else if (this.direction > -4){
                    this.direction_moving = 48;
                    this.direction -= 1;
                    this.animation = -this.direction;
                } else {
                    this.direction_moving = 48;
                    this.animation++;
                    if (this.animation > 7) {
                        this.animation = 3
                    }
                }
                this.animation_timer = Date.now();
            }
        } else if (keyboard["d"]){
            if (this.animation_timer + this.animation_loop_time < Date.now()) {
                if (this.direction < 0) {
                    this.direction_moving = 48;
                    this.direction += 1;
                    this.animation = -this.direction;
                } else if (this.direction === 0) {
                    this.direction_moving = 0;
                    this.direction += 1;
                    this.animation = 0;
                } else if (this.direction < 4){
                    this.direction_moving = 96;
                    this.direction += 1;
                    this.animation = this.direction;
                } else {
                    this.direction_moving = 96;
                    this.animation++;
                    if (this.animation > 7) {
                        this.animation = 3
                    }
                }
                this.animation_timer = Date.now();
            }
        }
        // fly up/down
        if (keyboard["w"] && keyboard["s"]) {
            // pass
        } else if (keyboard["w"] && 0 < this.y){
            this.y -= this.speed;
        } else if (keyboard["s"] && this.y < canvas.height){
            this.y += this.speed;
        }
        if (this.fire_timer + this.fire_loop_time < Date.now()) {
            this.fire("normal")
        }
        
        // Tick for all the fireballs
        for (var i = 0; i < this.fire_balls.length; i++) {
            this.fire_balls[i].tick()
        }
        
        // Remove out of range fireballs
        var offset = 0;
        for (var i = 0; i < this.fire_balls.length; i++) {
            if (this.fire_balls[i-offset].y < - 30) {
                this.fire_balls.splice(i-offset++, 1)
            }
        }
    }
    
    draw() {
        for (var i = 0; i < this.fire_balls.length; i++) {
            this.fire_balls[i].draw()
        }
        ctx.drawImage(this.texture, 32*this.animation, this.direction_moving, 32, 46, this.x - 16, this.y - 23, 32,36);
    }
}

const player = new Player();

// Update cursor variable
canvas.addEventListener("mousemove", function(event){
    cursorx = event.clientX - this.offsetLeft;
    cursory = event.clientY - this.offsetTop;
});

// Update keyboard variable
document.onkeydown = document.onkeyup = document.onkeypress = handle;

function handle(e) {
    if (e.type === "keydown") {
        keyboard[e.key] = true;
    } else if (e.type === "keyup") {
        keyboard[e.key] = false;
    }
    print(e.type, e.key)
//        'keyup/press/down'e.type
//        ' key=f' + e.key
//        ' code=KeyF' + e.code
//        (e.shiftKey ? ' shiftKey' : '')
//        (e.ctrlKey ? ' ctrlKey' : '')
//        (e.altKey ? ' altKey' : '')
//        (e.metaKey ? ' metaKey' : '')
//        (e.repeat ? ' (repeat)' : '')
}

function draw() {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw elements
    player.draw();
}


lastDraw = 0
fps = 60;


function update() {
    // Tick for elements
    player.tick();
    
    // Draws only once 1/fps seconds
    // During the wait it will execute update until time comes
    if (lastDraw + 1000/fps < Date.now()) {
        lastDraw = Date.now()
        draw()
    }
    requestAnimationFrame(update); // Loops back when browser ready.
}

// Init game
update()