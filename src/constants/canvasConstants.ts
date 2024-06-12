const windowHeight:number=0.9*window.innerHeight;
let windowWidth;
window.innerWidth>760?windowWidth=0.3 * window.innerWidth:windowWidth=window.innerWidth;
type Constants={
    windowHeight:number;
    windowWidth:number;
}
const canvasConstants: Constants={
    windowHeight:windowHeight,
    windowWidth:windowWidth,

}

export default canvasConstants;