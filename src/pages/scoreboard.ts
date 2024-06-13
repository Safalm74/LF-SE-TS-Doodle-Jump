import mainConstants from "../constants/mainConstants";
import loadHomePage from "./home";

export default function scoreBoard() {
    mainConstants.inGame = false;
    console.log('ScoreBoard');
    if (mainConstants.rootDiv) {
        mainConstants.allScore.sort();
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
        startBtn.value = "Return";
        startBtn.innerHTML = "Return to home";
        startBtn.className = "return-btn";
        startBtn.addEventListener(
            'click',
            () => {
                loadHomePage();
            }
        );
        //appending start btn to homepage

        const scoreBoardTable = document.createElement('table');
        scoreBoardTable.style.color = "white";
        let scoreBoardMsg = `<tr><td>S.N.</td><td> Score</td></tr>`
        mainConstants.allScore.forEach(
            (score, ind) => {
                scoreBoardMsg += `<tr><td>${ind + 1}</td><td>${score}</td></tr>`
            }
        );
        scoreBoardTable.innerHTML = scoreBoardMsg

        homepage.appendChild(scoreBoardTable);
        homepage.appendChild(startBtn);
        mainConstants.rootDiv.appendChild(homepage);



    }
}