/**
 * Créé une image à partir d'une source.
 * 
 * @param {string} src 
 */
function getImage(src) {
    const img = new Image();
    img.src = src;
    return img;
}

/**
 * Permet de découper de récupérer les coordonées d'un sprite
 * sous la forme d'un tableau.
 * 
 * @param {number} imgWidth 
 * @param {number} nbRown 
 * @param {number} nbCols 
 * @param {number} cellWidth 
 * @param {number} cellHeight 
 */
function getFaces(imgWidth = 0, nbRows = 0, nbCols = 0, cellWidth = 0, cellHeight = 0) {
    const data = [];

    for (let i = 0; i < nbRows; i++) {
        let item = [];

        for (let j = 0; j < nbCols; j++) {
            item.push({
                x: imgWidth / nbCols * j,
                y: imgWidth / nbCols * i,
                w: cellWidth,
                h: cellHeight
            });
        }

        data.push(item);
    }

    return data;
}

const keyState = {};

window.addEventListener('keydown', function (e) {
    keyState[e.keyCode || e.which] = true;
}, true);

window.addEventListener('keyup', function (e) {
    keyState[e.keyCode || e.which] = false;
}, true);

/**
 * Gestion des évènements du clavier.
 * 
 * @param {object} hero 
 */
function keyboard(hero) {
    return function (event) {

        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                hero.positionX += 2 * hero.speed;
                hero.loopCycle(hero.right);
                break;

            case 'ArrowLeft':
                event.preventDefault();
                hero.positionX -= 2 * hero.speed;
                hero.loopCycle(hero.left);
                break;

            case 'ArrowUp':
                event.preventDefault();
                hero.positionY -= 2 * hero.speed;
                hero.loopCycle(hero.up);
                break;

            case 'ArrowDown':
                event.preventDefault();
                hero.positionY += 2 * hero.speed;
                hero.loopCycle(hero.down);
                break;
        }
    }
}