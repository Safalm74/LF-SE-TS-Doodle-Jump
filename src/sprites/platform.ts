import Spriteplatform from "../assets/platform.png";
import Point from "../modules/points";

const Sprite = new Image;
Sprite.src = Spriteplatform;

type PlatformSprite = {
    sprite: HTMLImageElement,
    width: number,
    height: number,
    position: Point[]
}
const platformSprite: PlatformSprite = {
    sprite: Sprite,
    width: 64,
    height: 25,
    position: [new Point(11, 100)]
}

export default platformSprite;