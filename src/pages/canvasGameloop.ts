import mainConstants from "../constants/mainConstants";
import canvasConstants from "../constants/canvasConstants";
import Platform from "../modules/platform";
import platformConstant from "../constants/platformConstants";
import Point from "../modules/points";
import getRandomInt from "../utils/randomNumber";
import Player from "../modules/player";
import Power from "../modules/powers";

const canvasMain: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
const scoreTopMsg = document.createElement('h1');
scoreTopMsg.style.backgroundColor = "wheat";
scoreTopMsg.style.width = `${canvasConstants.windowWidth}`;

function loadDOM() {
    if (mainConstants.rootDiv) {
        mainConstants.rootDiv.innerHTML = '';
        mainConstants.rootDiv.appendChild(scoreTopMsg);
        mainConstants.rootDiv.appendChild(canvasMain);

    }
}

let platformArray: Platform[] = [];
let powerArray: Power[] = []
function createPower(platformObj: Platform) {
    const powerObj = new Power(
        new Point(
            platformObj.position.x + platformObj.width / 2,
            platformObj.position.y - 54 + platformObj.height),

        17,
        54,
        0
    )
    powerArray.push(powerObj);
}


function createPlatform() {
    const platformObj = new Platform(
        new Point
            (getRandomInt(0, canvasConstants.windowWidth - platformConstant.width)
                , platformConstant.position.y),
        platformConstant.width,
        platformConstant.height,
        platformConstant.speed
    )
    //generating powerups with probability of 25%
    const probPower = getRandomInt(1, 100)
    if (!player1.onPower && (probPower % 2 == 0 && probPower < 50)) {
        createPower(platformObj);
    }
    platformArray.push(platformObj)
}
const player1: Player = new Player(
    new Point
        (getRandomInt(0, canvasConstants.windowWidth - platformConstant.width)
            , canvasConstants.windowHeight / 2),
    platformConstant.width / 2,
    platformConstant.width / 2,
    20
);

function initiateInitialPositions() {
    for (let i = 0; i < 5; i++) {

        platformArray.push(new Platform(
            new Point
                (getRandomInt(0, canvasConstants.windowWidth - platformConstant.width)
                    , canvasConstants.windowHeight * (i) / 5),
            platformConstant.width,
            platformConstant.height,
            0
        ));
    }
    player1.position.x = platformArray[2].position.x + platformArray[2].width / 2;
    player1.position.y = platformArray[2].position.y - platformArray[2].height * 2;
}
let speed = 0;

function gameMainloop() {
    speed = 5 *
        (canvasConstants.windowHeight -
            player1.position.y) /
        canvasConstants.windowHeight

    ctx.clearRect(
        0,
        0,
        canvasConstants.windowWidth,
        canvasConstants.windowHeight);
    platformArray.forEach(
        (obj) => {
            obj.update();
            obj.draw(ctx);
            obj.speed = speed;
        }
    );
    platformArray = platformArray.filter(
        (obj) => {

            if (obj.position.y < canvasConstants.windowHeight) {
                return true;
            }
            else {
                return false;
            }
        }
    );
    powerArray.forEach(
        (obj) => {
            obj.update();
            obj.draw(ctx);
            obj.speed = speed;
        }
    );

    powerArray.forEach((obj) => {
        if (
            obj.position.y + obj.height >= player1.position.y &&
            obj.position.y <= player1.position.y + player1.height &&
            obj.position.x + obj.width >= player1.position.x &&
            obj.position.x + obj.width <= player1.position.x + obj.width + player1.width &&
            !player1.onPower
        ) {
            player1.onPower = true;
            obj.isActive = true;
            player1.activatedPower = obj;
            powerArray = powerArray.filter(
                (obj) => {
                    return (obj === player1.activatedPower);

                }
            );
            setTimeout(
                () => {
                    player1.onPower = false;
                    powerArray = [];

                }
                , 1500);
        }
    });
    //  generating platform height at random
    if (platformArray[platformArray.length - 1].position.y > getRandomInt(90,150) ) {
        createPlatform();
    }

    player1.draw(ctx);
    player1.dropAndBounce(platformArray);
    player1.powerup();


    scoreTopMsg.innerHTML = `Score: ${player1.score}`
    if (mainConstants.inGame && mainConstants.resumeGame) {
        requestAnimationFrame(gameMainloop);
    }
}
function reset() {
    player1.position = new Point
        (getRandomInt(0, canvasConstants.windowWidth - platformConstant.width)
            , canvasConstants.windowHeight / 2);
    player1.score = 0;

}
const ctx = canvasMain.getContext('2d') as CanvasRenderingContext2D;
export { player1, canvasMain, gameMainloop }
export default function canvasInitialize() {
    reset();
    console.log('ingame')
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