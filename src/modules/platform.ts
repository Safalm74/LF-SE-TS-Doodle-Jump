import Point from "./points";
import platformSprite from "../sprites/platform";
import { player1 } from "../pages/canvasGameloop";
import canvasConstants from "../constants/canvasConstants";
import getRandomInt from "../utils/randomNumber";
interface Iplatform {
    position: Point;
    width: number;
    height: number;
    speed: number;
    speedx:number
}

export default class Platform implements Iplatform {
    position;
    width;
    height;
    speed;
    speedx: number;
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
        this.speedx=getRandomInt(-1,1);
        
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
        if (player1.score>30){
           this.position.x +=this.speedx;
            console.log('s',this.speedx);
            if (this.position.x<0 || this.position.x+ this.width > canvasConstants.windowWidth){
               this.speedx *=-1
            }
        }
    }
    update() {
        this.move();
    }
}