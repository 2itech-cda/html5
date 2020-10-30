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

        this.imgCellWidth = img.width - img.height;
        this.imgCellHeight = img.width - img.height;
        this.imgNbCols = img.width / this.imgCellWidth;
        this.imgNbRows = img.height / this.imgCellHeight;
    }

    /**
     * @return Array
     */
    getImageToArray() {
        return getFaces(
            this.image.width,
            this.imgNbRows,
            this.imgNbCols,
            this.imgCellWidth,
            this.imgCellHeight,
        );
    }

    getImageRow(index) {
        if (index > this.imgNbRows) {
            throw new Error(`index ${index} is greater than ${this.imgNbRows}`);
        }

        return this.getImageToArray()[index];
    }

    /**
     * @param {CanvasRenderingContext2D} context 
     */
    render(context) {
        context.drawImage(
            this.image,
            this.currentX, this.currentY, this.imgCellWidth, this.imgCellHeight,
            this.positionX, this.positionY, this.imgCellWidth, this.imgCellHeight
        );
    }
}