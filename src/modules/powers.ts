import Point from "./points";
import jetSprite from "../sprites/jet";
interface Ipower{
    position:Point;
    width:number;
    height:number;
    speed:number;
    isActive:boolean;
    animationIndexTracker:number;
}

export default class Power implements Ipower{
    position;
    width;
    height;
    speed;
    isActive: boolean=false;
    animationIndexTracker=0;
    constructor(
        p:Point,
        w:number,
        h:number,
        s:number,
    )
        {
        this.position=p;
        this.width=w;
        this.height=h;
        this.speed=s;
    }
    animationIndex(){
        if (this.isActive){
            this.animationIndexTracker=((this.animationIndexTracker)%8)+1

        }
        else{
            this.animationIndexTracker=0;
        }
        return this.animationIndexTracker;
    }

    draw(contextOb:CanvasRenderingContext2D):void{
        contextOb.drawImage(
            jetSprite.sprite,
            jetSprite.position[this.animationIndex()].x,
            jetSprite.position[this.animationIndex()].y,
            jetSprite.width,
            jetSprite.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);

         }
    move(){
        this.position.y +=this.speed;
    }
    update(){
        this.move();
    }
}