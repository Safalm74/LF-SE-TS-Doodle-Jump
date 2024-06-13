import Point from "./points";
import platformSprite from "../sprites/platform";
interface Iplatform {
    position: Point;
    width: number;
    height: number;
    speed: number;
}

export default class Platform implements Iplatform {
    position;
    width;
    height;
    speed;
    constructor(
        p: Point,
        w: number,
        h: number,
        s: number,
    ) {
        this.position = p;
        this.width = w;
        this.height = h;
        this.speed = s;
    }

    draw(contextOb: CanvasRenderingContext2D): void {
        contextOb.drawImage(
            platformSprite.sprite,
            platformSprite.position[0].x,
            platformSprite.position[0].y,
            platformSprite.width,
            platformSprite.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);

    }
    move() {
        this.position.y += this.speed;
    }
    update() {
        this.move();
    }
}