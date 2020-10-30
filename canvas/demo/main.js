// Initialize
const canvas = document.querySelector('#stage');
const context = canvas.getContext('2d');

// Parametrer le canvas.
canvas.width = 800;
canvas.height = 600;
canvas.style.backgroundColor = '#ccc';

// Changer la couleur
context.fillStyle = 'royalblue';
context.strokeStyle = '#000';
context.lineWidth = 4;

// Dessiner un rectangle.
context.fillRect(0, 0, 400, 300);
context.strokeRect(2, 2, 400, 300); // 408 x 308
context.fillRect(400, 300, 400, 300);

context.fillStyle = 'black';

// Dessiner un cercle.
context.arc(400, 300, 100, 0, Math.PI*2, true);
context.fill();

context.context.rotate(Math.PI / 180 * degree);