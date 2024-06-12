import mainConstants from "../constants/mainConstants";
import canvasConstants from "../constants/canvasConstants";
import Platform from "../modules/platform";
import platformConstant from "../constants/platformConstants";
import Point from "../modules/points";
import getRandomInt from "../utils/randomNumber";
import Player from "../modules/player";

const canvasMain: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
const scoreTopMsg = document.createElement('h1');
scoreTopMsg.style.backgroundColor = "wheat";

function loadDOM() {
    if (mainConstants.rootDiv) {
        mainConstants.rootDiv.innerHTML = '';
        mainConstants.rootDiv.appendChild(scoreTopMsg);
        mainConstants.rootDiv.appendChild(canvasMain);

    }
}

let platformArray: Platform[] = [];


function createPlatform() {
    const platformObj = new Platform(
        new Point
        (getRandomInt(0, canvasConstants.windowWidth-platformConstant.width)
        ,platformConstant.position.y) ,
        platformConstant.width,
        platformConstant.height,
        platformConstant.speed
    )
    platformArray.push(platformObj)
}

function callSetInterval(){
    setInterval(
        () => {
            if (platformArray.length<10){
            createPlatform();
            }
        },
        2000/platformConstant.speed
    );
}
//callSetInterval()

const player1: Player=new Player(
    new Point
    (getRandomInt(0, canvasConstants.windowWidth-platformConstant.width)
    ,canvasConstants.windowHeight/2) ,
    platformConstant.width/2,
    platformConstant.width/2,
    20
);

function initiateInitialPositions(){
    for (let i=0;i<5;i++){

        platformArray.push(new Platform(
            new Point
            (getRandomInt(0, canvasConstants.windowWidth-platformConstant.width)
            ,canvasConstants.windowHeight*(i)/5) ,
            platformConstant.width,
            platformConstant.height,
            0
        ));
    }
    player1.position.x=platformArray[2].position.x+platformArray[2].width/2;
    player1.position.y=platformArray[2].position.y-platformArray[2].height*2;
}
let speed=0;
function gameMainloop() {
    speed=5*(canvasConstants.windowHeight-player1.position.y)/canvasConstants.windowHeight

    ctx.clearRect(
        0,
        0,
        canvasConstants.windowWidth,
        canvasConstants.windowHeight);
    platformArray.forEach(
        (obj) => {
            obj.update();
            obj.draw(ctx);
            obj.speed=speed;
        }
    );
    platformArray=platformArray.filter(
        (obj)=>{

            if (obj.position.y<canvasConstants.windowHeight){
                return true;
            }
            else{
                return false;
            }
        }
    );
    if (platformArray[platformArray.length-1].position.y>100){
        createPlatform();
    }
    player1.draw(ctx);
    player1.dropAndBounce(platformArray);
    
    requestAnimationFrame(gameMainloop);
}

const ctx = canvasMain.getContext('2d') as CanvasRenderingContext2D;
export {player1}
export default function canvasInitialize() {
    if (mainConstants.rootDiv) {
        mainConstants.rootDiv.innerHTML = '';
    }
    loadDOM();
    mainConstants.inGame = true;
    const canvasWidth: number = canvasConstants.windowWidth;
    const canvasHeight: number = canvasConstants.windowHeight;
    canvasMain.width = canvasWidth;
    canvasMain.height = canvasHeight;
    canvasMain.style.display = 'block';
    canvasMain.style.margin = "0 auto";
    canvasMain.style.backgroundColor = "#87CEEB";
    initiateInitialPositions();
    gameMainloop();
}