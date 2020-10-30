document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('#stage');
    const ctx = canvas.getContext('2d');
    const imgBg = getImage('img/zelda-bg-01.jpg');
    const hero = new Hero(getImage('img/link.png'));

    window.addEventListener('keydown', keyboard(hero));

    canvas.width = 800;
    canvas.height = 600;

    function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1280 x 720
        ctx.drawImage(
            imgBg,
            160, 0, 960, 720,
            0, 0, 800, 600
        );

        console.log(hero.getImageRow(0));

        hero.currentX = 0;
        hero.currentY = 0;
        hero.render(ctx);
    }

    setInterval(main, 2000);

});
