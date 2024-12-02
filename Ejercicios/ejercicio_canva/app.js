let canvas = document.getElementById("miCanvas");  
let ctx = canvas.getContext("2d"); 

let x = 200, y = 2;  
let speed = 2 
const width = 50, height = 50;  



let img = new Image();  
img.src = 'imagen.png';  


img.onload = function() {
    window.requestAnimationFrame(draw);  
};


window.addEventListener("keydown", moveShape);

function moveShape(event) {
    const key = event.key;
    switch (key) {
        case "ArrowUp":
            if (y > 0) y -= 10;  
            break;
        case "ArrowDown":
            if (y < canvas.height - height) y += 10;  
            break;
        case "ArrowLeft":
            if (x > 0) x -= 10; 
            break;
        case "ArrowRight":
            if (x < canvas.width - width) x += 10; 
            break;
    }
}

function draw() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, width, height);
    ctx.drawImage(img, x + 50, y, 50, 50);
   
    window.requestAnimationFrame(draw);
}
