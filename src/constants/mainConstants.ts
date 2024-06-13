type MainConstants = {
    rootDiv: HTMLElement | null;
    inGame: boolean;
    highScore: number;
    allScore: number[];
    resumeGame: boolean;
}

const mainConstants: MainConstants = {
    rootDiv: document.getElementById('app'),
    inGame: false,
    highScore: 0,
    allScore: [],
    resumeGame: true
}

if (mainConstants.rootDiv) {
    mainConstants.rootDiv.style.height = '100vh';
    mainConstants.rootDiv.style.width = '100%';

}

export default mainConstants;