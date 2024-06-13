import loadHomePage from "./pages/home";
import canvasConstants from "./constants/canvasConstants";
//import canvasInitialize from "./pages/canvasGameloop";
import { player1,canvasMain } from "./pages/canvasGameloop";

loadHomePage();
//canvasInitialize();

window.addEventListener(
  'keypress',
  (e)=>{
    if (!player1.onPower){
      switch (e.key){
        case 'a':
          player1.move(false);
          break;
  
        case 'd':
          player1.move(true);
          break;
  
      }
    }
    
  }
);
canvasMain.addEventListener('click'
  ,
(e)=>{
  if (!player1.onPower){
    player1.move(!(e.offsetX<canvasConstants.windowWidth/2));
  }}
);