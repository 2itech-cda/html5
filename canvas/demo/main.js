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
context.strokeRect(2, 2, 400, 300);   // 408 x 308
context.fillRect(400, 300, 400, 300); // fillRect(x, y, w, h)

context.fillStyle = 'black';

// Dessiner un cercle.
context.arc(400, 300, 100, 0, Math.PI*2, true);
context.fill();

// Dessier des lignes

// On trace un chemin.
context.fillStyle = 'white';

context.beginPath();
context.moveTo(50, 50);   // on position le début de mon tracé
context.lineTo(200, 50);  // on trace une ligne
context.lineTo(200, 175);
context.lineTo(50, 175);
context.closePath();      // on ferme la forme
context.fill();           // on rempli la forme fermée
context.stroke();         // on trace les lignes

// On dessine une image.
// https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage
const link = new Image();
link.src = 'img/link.png';

// 450w x 360h
// 450 - 360 = 90
// 450 / 5   = 90
link.onload = () => {
    // context.drawImage(image, 0, 0);
    // context.drawImage(image, 0, 0, 450/2, 360/2);

    context.drawImage(link, 300, 0, 450, 360);

    context.drawImage(
        link,
        0, 0, 90, 90,  // source (recadrage, rogner, crop)
        0, 0, 150, 150 // destination de la source sur le canvas
    );

    // affiche de la première pièce
    // 1000w x 10h
    const coin = new Image();
    coin.src = './img/coins.png';

    let x = 0;
    let speed = 25;

    coin.onload = () => {
        setInterval(() => {
            context.clearRect(200, 400, 100, 100);

            context.drawImage(
                coin,
                x, 0, 100, 100,
                200, 400, 100, 100,
            );

            x += 100;

            if (x === 1000) {
                x = 0;
            }

        }, 1000/24 - speed);
    }
};
