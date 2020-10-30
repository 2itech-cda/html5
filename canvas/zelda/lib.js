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

/**
 * Gestion des évènement du clavier.
 * 
 * @param {object} hero 
 */
function keyboard(hero) {
    return function (event) {
        // event.preventDefault();

        console.log(hero.faces);

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
