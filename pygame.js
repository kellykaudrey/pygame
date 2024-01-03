const canvas = document.getElementById('pygame-canvas');
const ctx = canvas.getContext('2d');

function main() {
    function draw() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw something on the canvas (e.g., a green circle)
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(400, 300, 50, 0, 2 * Math.PI);
        ctx.fill();
    }

    function gameLoop() {
        draw();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

main();
