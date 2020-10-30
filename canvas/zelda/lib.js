function getImage(src) {
    const img = new Image();
    img.src = src;
    return img;
}

function keyboard(hero) {
    return function (event) {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowRight':
                hero.currentX += 10;
                break;

            case 'ArrowLeft':
                hero.currentX -= 10;
                break;

            case 'ArrowUp':
                hero.currentY -= 10;
                break;

            case 'ArrowDown':
                hero.currentY += 10;
                break;
        }
    }
}
