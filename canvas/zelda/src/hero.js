/**
 * @class Hero
 */
class Hero {

    /**
     * @param {Image} img 
     */
    constructor(img) {
        this.name = '';
        this.image = img;
        this.currentX = 0;
        this.currentY = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.speed = 4;

        this.imgCellWidth = img.width - img.height;
        this.imgCellHeight = img.width - img.height;
        this.imgNbCols = img.width / this.imgCellWidth;
        this.imgNbRows = img.height / this.imgCellHeight;

        this.faces = getFaces(
            this.image.width,
            this.imgNbRows,
            this.imgNbCols,
            this.imgCellWidth,
            this.imgCellHeight,
        );

        this.loopIndex = 0;
        this.left = 0;
        this.right = 1;
        this.up = 2;
        this.down = 3;
    }

    loopCycle(direction) {
        this.currentX = this.faces[direction][this.loopIndex].x;
        this.currentY = this.faces[direction][this.loopIndex].y;

        this.loopIndex++;

        if (this.loopIndex >= this.imgNbCols) {
            this.loopIndex = 0
        }
    }

    /**
     * @param {CanvasRenderingContext2D} context 
     */
    render(context) {
        context.drawImage(
            this.image,
            this.currentX, this.currentY, this.imgCellWidth, this.imgCellHeight,
            this.positionX, this.positionY, this.imgCellWidth/2, this.imgCellHeight/2
        );
    }
}