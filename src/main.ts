import loadHomePage from "./pages/home";
import canvasConstants from "./constants/canvasConstants";
//import canvasInitialize from "./pages/canvasGameloop";
import { player1, canvasMain, gameMainloop } from "./pages/canvasGameloop";
import mainConstants from "./constants/mainConstants";

loadHomePage();
//canvasInitialize();

window.addEventListener(
  'keydown',
  (e) => {
    if (!player1.onPower) {
      switch (e.key) {
        case 'a':
          player1.speedx = 1;
          player1.move(false);
          break;

        case 'd':
          player1.speedx = 1;
          player1.move(true);
          break;

        case 'q':
          mainConstants.resumeGame ? mainConstants.resumeGame = false : mainConstants.resumeGame = true
          gameMainloop();
          break;

      }
    }

  }
);
canvasMain.addEventListener('click'
  ,
  (e) => {
    if (!player1.onPower) {
      player1.move(!(e.offsetX < canvasConstants.windowWidth / 2));
    }
  }
);