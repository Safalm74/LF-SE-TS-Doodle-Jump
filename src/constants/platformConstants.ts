import Point from "../modules/points";
import canvasConstants from "./canvasConstants";
import getRandomInt from "../utils/randomNumber";


type PlatformConstant = {
    position: Point;
    width: number;
    height: number;
    speed: number;
}

const width = 0.2 * canvasConstants.windowWidth;
const height = canvasConstants.windowHeight * 0.02
const platformConstant: PlatformConstant = {
    position: new Point(
        getRandomInt(0, canvasConstants.windowWidth - width)
        ,
        height),
    width: width,
    height: height,
    speed: 1

}
export default platformConstant;