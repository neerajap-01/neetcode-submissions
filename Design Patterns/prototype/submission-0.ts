/**
 * @return {Shape}
 */
class Shape {
    clone() {}
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    width: any;
    height: any;
    constructor(width?: any, height?: any) {
        super();
        this.width = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone() {
        return new Rectangle(this.width, this.height);
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    length: any;
    constructor(length?: any) {
        super();
        this.length = length;
    }

    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone() {
        return new Square(this.length);
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        const clonedShapes = [];
        for (const shape of shapes) {
            clonedShapes.push(shape.clone());
        }
        return clonedShapes;
    }
}
