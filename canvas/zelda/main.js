document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('#stage');
    const ctx = canvas.getContext('2d');

    const imgBg = getImage('img/zelda-bg-01.jpg');
    const imgLink = getImage('img/link.png');

    const hero = {
        name: 'Link',
        currentX: 0,
        currentY: 0,
        positionX: 0,
        positionY: 0,
        faces: getFaces(450, 4, 5, 90, 90),
    };

    window.addEventListener('keydown', keyboard(hero));

    canvas.width = 800;
    canvas.height = 600;

    function main() {

        // 1280 x 720
        ctx.drawImage(
            imgBg,
            160, 0, 960, 720,
            0, 0, 800, 600
        );

        // 450 x 360
        ctx.drawImage(
            imgLink,
            hero.positionX, 0, 90, 90,
            hero.currentX, hero.currentY, 90, 90,
        );
    }

    setInterval(main, 1000/24);

});
