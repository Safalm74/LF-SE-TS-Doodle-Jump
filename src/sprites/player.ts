import SpritePlayer from "../assets/player.png"
import Point from "../modules/points";

const Sprite =new Image;
Sprite.src=SpritePlayer;

type PlayerSprite={
    sprite:HTMLImageElement,
    width:number,
    height:number,
    position:Point[]
}
const playerSprite:PlayerSprite={
    sprite:Sprite,
    width:92,
    height:92,
    position:[new Point(0,0),new Point(92,0),new Point(182,0)]
}

export default playerSprite;