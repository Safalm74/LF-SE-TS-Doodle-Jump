import mainConstants from "../constants/mainConstants";
import canvasInitialize from "./canvasGameloop";
import scoreBoard from "./scoreboard";

export default function loadHomePage() {
    mainConstants.inGame = false;
    console.log('Home');
    if (mainConstants.rootDiv) {
        mainConstants.rootDiv.innerHTML = '';
        //setting home page
        const homepage = document.createElement('div');
        homepage.style.display = 'flex';
        homepage.style.height = `100vh`;
        homepage.style.width = `100%`;
        homepage.style.justifyContent = "center";
        homepage.style.alignItems = "center";
        homepage.style.position = 'relative';
        homepage.className = 'home-page';
        //setting start btn
        const startBtn = document.createElement('button');
        startBtn.style.position = "absolute";
        startBtn.style.top = "50%";
        startBtn.style.left = "50%";
        startBtn.style.transform = "translate(-50%,-50%)";
        startBtn.value = "Start Game";
        startBtn.innerHTML = "Start Game";
        startBtn.className = "start-btn";
        startBtn.addEventListener(
            'click',
            () => {
                canvasInitialize();
                mainConstants.inGame = true;
            }
        );
        const scoreBtn = document.createElement('button');
        scoreBtn.style.position = "absolute";
        scoreBtn.style.top = "60%";
        scoreBtn.style.left = "50%";
        scoreBtn.style.transform = "translate(-50%,-50%)";
        scoreBtn.value = "Score Board";
        scoreBtn.innerHTML = "Score Board";
        scoreBtn.className = "start-btn";
        scoreBtn.addEventListener(
            'click',
            () => {
                scoreBoard();
            }
        );
        //appending start btn to homepage
        homepage.appendChild(scoreBtn);
        homepage.appendChild(startBtn);
        mainConstants.rootDiv.appendChild(homepage);



    }
}
