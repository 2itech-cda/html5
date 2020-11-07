document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('#stage');
    const ctx = canvas.getContext('2d');
    const imgBg = getImage('img/bg.png');
    const hero = new Hero(getImage('img/link.png'));

    window.addEventListener('keydown', keyboard(hero), false);

    canvas.width = 700;
    canvas.height = 400;

    hero.positionX = canvas.width / 2;
    hero.positionY = canvas.height / 2 - 40;

    function main() {     
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgBg, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
        
        hero.render(ctx);
        requestAnimationFrame(main);
    }

    main();
});