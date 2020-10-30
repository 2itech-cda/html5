const canvas = document.querySelector('#stage');
const ctx = canvas.getContext('2d');

const imgBg = getImage('img/zelda-bg-01.jpg');
const imgLink = getImage('img/link.png');

function main() {

    // 1280 x 720
    ctx.drawImage(
        imgBg,
        0, 0, 1280, 720
    );
    
}

main();

// setInterval(main, 1000/24);
