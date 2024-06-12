import Point from "./points";
import playerSprite from "../sprites/player";
import stateConstants from "../constants/stateConstants";
import Platform from "./platform";
import canvasConstants from "../constants/canvasConstants";
import gameoverPage from "../pages/gameover";
interface Iplayer {
    position: Point;
    width: number;
    height: number;
    speedx: number;
    speedy:number;
    lookDirection:number;
    prevDirection:number;
    score:number;
}

export default class Player implements Iplayer {
    position;
    width;
    height;
    speedx;
    speedy: number=0;
    lookDirection: number=0;
    prevDirection: number=this.lookDirection;
    score: number=0;
    constructor(
        p: Point,
        w: number,
        h: number,
        s: number,
    ) {
        this.position = p;
        this.width = w;
        this.height = h;
        this.speedx = s;
        
    }

    draw(contextOb: CanvasRenderingContext2D): void {
        contextOb.drawImage(
            playerSprite.sprite,
            playerSprite.position[this.lookDirection].x,
            playerSprite.position[this.lookDirection].y,
            playerSprite.width,
            playerSprite.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
        if (this.position.y>canvasConstants.windowHeight){
            gameoverPage(this.score);
        }

    }
    move(left: boolean) {
        clearInterval(stateConstants.lateralInterval);
        let adder: number;
        left ? ()=>{adder = 1} : adder = -1;

        if (left){
            adder=1;
            this.lookDirection=1;
        }else{
            adder=-1;
            this.lookDirection=0;
        }
        this.position.x += adder * this.speedx;
        if (this.position.x<=0){
            this.position.x=canvasConstants.windowWidth-this.width
        }
        if (this.position.x>=canvasConstants.windowWidth){
            this.position.x=0
        }
    }
    dropAndBounce(platformArray:Platform[]) {
        let collided=false;
        const g=0.08;
      


       /* 
        1. acceleration gravity is always acting downwards 
            i.e in opposite direction of jump (retardation due to gravity)
        2.  distance covered will be s=ut + 1/2 at**2/ Taking first derivative for 
            evaluating changing velocity of jumping doodle
            that will be v=u-2at
        3. direction will change one v reaches 0;
        4. downfall of doodle will be accelerated by g with initial velocity u=0 and
            final velocity v=u+2at
        *****for bouncing collision detection is used only when falling****
        while jumping doodle will ignore collision detection
       */
        platformArray.forEach(
            (obj)=>{

                document.body.style.backgroundColor="white";
               if (
                obj.position.y+obj.height  >= this.position.y&&
                obj.position.y<= this.position.y + this.height&&
                obj.position.x+obj.width>= this.position.x &&
                obj.position.x+obj.width<=this.position.x+obj.width+this.width
                ){
                collided=true;
               }
            }
        );
        if (this.position.y <=canvasConstants.windowHeight*0.2){
            this.speedy=0;
        }
        this.speedy=this.speedy+g
        this.position.y += this.speedy

        if (stateConstants.doodleFalling && collided){
            stateConstants.doodleFalling=false;
            this.speedy=-5*(this.position.y)/canvasConstants.windowHeight
            ;
            this.prevDirection=this.lookDirection;
            this.lookDirection=2;
            


        }
        else{
            if (this.speedy>=0){
                stateConstants.doodleFalling=true;
                this.lookDirection=this.prevDirection;
            }
        }
    }

}