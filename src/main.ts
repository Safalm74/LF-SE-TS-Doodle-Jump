import loadHomePage from "./pages/home";
//import canvasInitialize from "./pages/canvasGameloop";
import { player1 } from "./pages/canvasGameloop";

loadHomePage();
//canvasInitialize();

window.addEventListener(
  'keypress',
  (e)=>{
    switch (e.key){
      case 'a':
        player1.move(false);
        break;

      case 'd':
        player1.move(true);
        break;

    }
  }
);